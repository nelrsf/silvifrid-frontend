import { Injectable } from '@angular/core';
import { Cart } from 'src/app/Model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart!: Cart
  private localStorageCartName = "cart";

  constructor() {
    this.createCart();
  }


  getCartFromLocalStorage() {
    let cartString = localStorage.getItem(this.localStorageCartName);
    if (cartString === undefined || cartString === null) {
      this.createCart();
      return this.cart;
    } else {
      let products = JSON.parse(cartString);
      this.cart.products = products;
      return this.cart;
    }
  }

  private createCart() {
    this.cart = new Cart();
  }

  setCart(cart: Cart) {
    this.cart = cart;
  }

  getCart() {
    return this.cart;
  }

  setCartIntoLocalStorage() {
    let cartStr = JSON.stringify(this.cart.products);
    localStorage.setItem(this.localStorageCartName, cartStr)
  }


}
