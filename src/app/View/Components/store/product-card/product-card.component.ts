import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/Model/Product';


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

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.productCard.nativeElement.style.width=this.cardwidth;
 }


  navigate(){
    this.router.navigate(['/purchase'], {queryParams: {_id: this.product._id}})
    window.scroll(0,0);
  }

}
