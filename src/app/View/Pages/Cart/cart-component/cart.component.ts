import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { CartService } from 'src/app/Controller/Services/cart/cart.service';
import { ShippingService } from 'src/app/Controller/Services/shipping/shipping.service';
import { Cart } from 'src/app/Model/cart';
import { iCity } from 'src/app/Model/iCity';


@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart?: Cart;
  cities: iCity[] = [];
  filteredCities!: Observable<iCity[]>
  cityControl: FormControl
  courierCost!: number;
  isLoadingCourierPrice: boolean = false;
  spinnerColor: ThemePalette = 'accent';
  hashHex!: string;

  constructor(private cartService: CartService, private htt: HttpClient,
    private router: Router, private shippingService: ShippingService) {
    this.cityControl = new FormControl();
    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      map(city => city ? this.filterCities(city) : this.cities.slice())
    );
  }

  filterCities(name: string) {
    return this.cities.filter(city =>
      city.NombreCiudad.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.cart = this.cartService.getCartFromLocalStorage();
    this.getCities();
  }

  navigateToProduct(productId: string) {
    this.router.navigate(['/purchase'], { queryParams: { _id: productId } });
  }

  deleteItem(index: number) {
    this.cart?.products.splice(index, 1);
    this.cartService.setCartIntoLocalStorage();
  }

  addItemQuantity(index: number) {
    if (this.cart?.products[index] !== undefined) {
      this.cart.products[index].quantity++;
    }
    this.cartService.setCartIntoLocalStorage();
  }

  reduceItemQuantity(index: number) {
    if (this.cart?.products[index] !== undefined) {
      this.cart.products[index].quantity--;
    }
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
      this.courierCost = parseFloat(response.Results[0].tarifa);
    })
  }

  getTotalCostPlusCourier() {
    return (this.courierCost ? this.courierCost : 0) + (this.cart ? this.cart.getTotalPrice() : 0)
  }

  async pay(){
    
    // let cadenaConcatenada = "inv033439400COPkKca3l5cOJv4mXl5V84Aww"
    // const encondedText = new TextEncoder().encode(cadenaConcatenada);
    // const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
    // const hashArray = Array.from(new Uint8Array(hashBuffer));
    // this.hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    this.htt.get("https://checkout.bold.co/payment/BTN_FIPQKJ68UP", {
      headers: {
        Authorization: "x-api-key 8DMcjDWPd7AjcrIfrUAlvSUL1VY_R1iWLhaG3mHiu4k"
      }
    }).subscribe()
  }


}
