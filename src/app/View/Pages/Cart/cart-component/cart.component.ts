import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { CartService } from 'src/app/Controller/Services/cart/cart.service';
import { ShippingService } from 'src/app/Controller/Services/shipping/shipping.service';
import { Cart } from 'src/app/Model/cart';
import { iCity } from 'src/app/Model/iCity';
import { ICourierCost, Transaction } from 'src/app/Model/transaction';
import { TransactionsServiceService } from 'src/app/Controller/Services/transactions/transactions-service.service';
import { AlertsService } from 'src/app/Controller/miscelaneous-services/alerts.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {

  @ViewChild('paymentButtonContainer') paymentButtonContainer!: ElementRef;

  cart?: Cart;
  cities: iCity[] = [];
  filteredCities!: Observable<iCity[]>
  cityControl: FormControl;
  addressGroup: FormGroup;
  courierCost: ICourierCost = { value: 0, signature: "" , city: 0};
  isLoadingCourierPrice: boolean = false;
  spinnerColor: ThemePalette = 'accent';
  boldScript: any;
  totalCostPlusCourier: number = 0;
  formMode: 'payment' | 'address' | 'sumary' = 'payment';
  transaction!: Transaction;

  constructor(private cartService: CartService, private alertService: AlertsService,
    private router: Router, private shippingService: ShippingService, private transactionsService: TransactionsServiceService) {
    this.cityControl = new FormControl();
    this.addressGroup = new FormGroup(
      {
        address: new FormControl('', [Validators.required, Validators.minLength(3)]),
        aditionalInfo: new FormControl(''),
        phone: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required])
      }
    );
    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      map(city => city ? this.filterCities(city) : this.cities.slice())
    );
  }

  ngAfterViewInit(): void {
    // this.setPaymentButton();
    this.updateTotalCostPlusCourier();
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.cart = this.cartService.getCartFromLocalStorage();
    this.getCities();
  }

  filterCities(name: string) {
    return this.cities.filter(city =>
      city.NombreCiudad.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }



  setPaymentButton(transaction: Transaction) {

    if (!this.boldScript) {
      this.boldScript = document.createElement("script");
      this.boldScript.src = "https://checkout.bold.co/library/boldPaymentButton.js";
      this.boldScript.setAttribute("data-bold-button", "");
      this.paymentButtonContainer.nativeElement.appendChild(this.boldScript);
    }

    this.boldScript.setAttribute("data-order-id", transaction._id);
    this.boldScript.setAttribute("data-currency", transaction.divisa);
    this.boldScript.setAttribute("data-amount", transaction.total)
    this.boldScript.setAttribute("data-api-key", environment.bold_api_key);
    this.boldScript.setAttribute("data-redirection-url", environment.payment_redirect_url + "/#/payment-sumary");
    this.boldScript.setAttribute("data-integrity-signature", transaction.hash);

  }


  navigateToProduct(productId: string) {
    this.router.navigate(['/purchase'], { queryParams: { _id: productId } });
  }

  deleteItem(index: number) {
    this.cart?.products.splice(index, 1);
    this.updateTotalCostPlusCourier();
    this.cartService.setCartIntoLocalStorage();
  }

  addItemQuantity(index: number) {
    if (this.cart?.products[index] !== undefined) {
      this.cart.products[index].quantity++;
    }
    this.updateTotalCostPlusCourier();
    this.cartService.setCartIntoLocalStorage();
  }

  reduceItemQuantity(index: number) {
    if (this.cart?.products[index] !== undefined) {
      this.cart.products[index].quantity--;
    }
    this.updateTotalCostPlusCourier();
    this.cartService.setCartIntoLocalStorage();
  }

  changeQuantity(event: any, index: number) {
    if (this.cart?.products[index] === undefined) {
      return
    }
    let value = event.target.value;
    let q = parseFloat(value);
    if (isNaN(q)) {
      this.cart.products[index].quantity = 0;
      return;
    }
    this.cart.products[index].quantity = q;
    this.updateTotalCostPlusCourier();
  }

  getCities() {
    this.shippingService.getCities().subscribe((data) => {
      let citiesArray = Array(data as iCity[]);
      this.cities = citiesArray[0]
    })
  }

  onSelectionChange(event: any) {
    this.isLoadingCourierPrice = true;
    let destinationCityId = event.option.id;
    let courierRequest = this.shippingService.getCourierQoute(destinationCityId, this.cartService.getCartFromLocalStorage().products);
    courierRequest.subscribe((response: any) => {
      this.isLoadingCourierPrice = false;
      this.courierCost.value = parseFloat(response.Results[0].tarifa);
      this.courierCost.signature = response.signature;
      this.courierCost.city = destinationCityId;
      this.updateTotalCostPlusCourier();
    });
  }

  updateTotalCostPlusCourier() {
    this.totalCostPlusCourier = (this.courierCost?.value ? this.courierCost.value : 0) + (this.cart ? this.cart.getTotalPrice() : 0);
  }


  goToPayment() {
    this.formMode = 'address';
  }

  sendTransaction() {
    const transaction: Transaction = new Transaction();
    transaction.dirección = {
      adicional: this.addressGroup.controls['aditionalInfo'].value,
      ciudad: this.cityControl.value,
      dirección: this.addressGroup.controls['address'].value

    }

    transaction.divisa = 'COP';
    transaction.total = this.totalCostPlusCourier;
    transaction.nombre = this.addressGroup.controls['name'].value
    transaction.telefono = this.addressGroup.controls['phone'].value
    transaction.productos = this.cart?.products ? this.cart?.products : [];
    transaction.costoEnvio = this.courierCost;

    this.formMode = 'sumary';

    this.transactionsService.createTransaction(transaction)
      .subscribe(
        {
          next: (response: Transaction) => {
            this.transaction = response;
            this.setPaymentButton(response);
            this.paymentButtonContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
          },
          error: (error: any) => {
            this.alertService.failAlert("Error al procesar la transacción, vuleve a intentarlo");
            console.log(error);
            this.formMode = 'address';
          }
        }
      )
  }


  getAddressStr(transaction: Transaction) {
    return transaction.dirección.dirección + '\n' + transaction.dirección.adicional + '\n' + transaction.dirección.ciudad
  }


  getCourierCostValue() {
    return this.courierCost?.value || 0;
  }



}
