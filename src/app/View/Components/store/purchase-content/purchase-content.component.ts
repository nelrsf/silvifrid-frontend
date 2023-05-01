import { AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AlertsService } from 'src/app/Controller/miscelaneous-services/alerts.service';
import { CartService } from 'src/app/Controller/Services/cart/cart.service';
import { ProductControllerService } from 'src/app/Controller/Services/products/product-controller.service';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-purchase-content',
  templateUrl: './purchase-content.component.html',
  styleUrls: ['./purchase-content.component.css']
})
export class PurchaseContentComponent implements OnInit {

  faPlus = faPlus;
  faMinus = faMinus;

  productQuantity: number = 1;

  productId: string = "";
  product: Product = new Product();
  subscription: Subscription = new Subscription();
  indxImg: number = 0;

  constructor(private route: ActivatedRoute, private routeEvent: Router, private productControllerService: ProductControllerService, private cartService: CartService, private alertService: AlertsService) {
    this.subscription = routeEvent.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.updateContent();
      }
    })
  }


  ngOnInit(): void {
    this.productQuantity = 1;
    this.updateContent();
  }

  updateContent() {
    window.scrollTo(0, 0);
    this.route.queryParams.subscribe(params => {
      this.productId = params['_id'];
      let p = this.productControllerService.getProductByID(this.productId)
      p.subscribe(data => {
        let ObjStr = JSON.stringify(data);
        let ObjJson = JSON.parse(ObjStr);
        this.product = ObjJson;
        this.indxImg = 0;
      })
    })
  }

  selectImg(ind: number) {
    this.indxImg = ind;
  }

  addQuantity() {
    this.productQuantity++;
  }

  reduceQuantity() {
    this.productQuantity--;
    if (this.productQuantity <= 0) {
      this.productQuantity = 1;
    }
  }

  checkNegativeQuantity(event: any) {
    let num = parseInt(event.target.value);
    if(Number.isInteger(num)){
      this.productQuantity = num;
    } else {
      this.productQuantity = 1;
    }
  }

  addProductToCart(){
    let cart =this.cartService.getCartFromLocalStorage();
    cart.addProduct({
      product: this.product,
      quantity: this.productQuantity
    });
    this.cartService.setCartIntoLocalStorage();
    this.getSuccessAlert();
  }

  getSuccessAlert(){
    let message = "<h1>Producto añadido correctamente!</h1>";
    let link = "<a href='/#/cart'> Quiero ver mi carrito de compras </a>"
    let html = message + "<br>" + link;
    this.alertService.successHtmlAlert(html);
  }

}
