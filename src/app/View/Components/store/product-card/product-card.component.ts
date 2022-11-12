import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AlertsService } from 'src/app/Controller/miscelaneous-services/alerts.service';
import { CartService } from 'src/app/Controller/Services/cart/cart.service';
import { ShippingService } from 'src/app/Controller/Services/shipping/shipping.service';
import { Cart, productQuantity } from 'src/app/Model/cart';
import { Product } from 'src/app/Model/product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @ViewChild("productcard")
  productCard!: ElementRef;
  @Input("cardwidth")cardwidth!: string;

  @Input("product")product: Product = new Product();
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;

  constructor(private router: Router, private cartService: CartService, private alertService: AlertsService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.productCard.nativeElement.style.width=this.cardwidth;
 }


  navigate(){
    this.router.navigate(['/purchase'], {queryParams: {_id: this.product._id}});
    window.scroll(0,0);
  }

  getProductWithQuantity(){
    let productQ: productQuantity = {
      product: this.product,
      quantity: 1
    };
    return productQ;
  }

  addProductToCart(){
    let cart: Cart = this.cartService.getCartFromLocalStorage();
    cart.addProduct(this.getProductWithQuantity());
    this.cartService.setCart(cart);
    this.cartService.setCartIntoLocalStorage();
    this.getSuccessAlertAddToCart();
  }

  getSuccessAlertAddToCart(){
    let message = "<h1>Producto añadido correctamente!</h1>";
    let link = "<a href='/#/cart'> Quiero ver mi carrito de compras </a>"
    let html = message + "<br>" + link;

    this.alertService.successHtmlAlert(html);
  }

}
