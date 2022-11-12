import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ProductControllerService } from 'src/app/Controller/Services/products/product-controller.service';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-products-ribbon',
  templateUrl: './products-ribbon.component.html',
  styleUrls: ['./products-ribbon.component.css']
})
export class ProductsRibbonComponent implements OnInit {
  public faAngleLeft = faAngleLeft;
  public faAngleRight = faAngleRight;

  @ViewChild("slider")
  slider!: ElementRef;
  @ViewChild("product")
  product!: Product;
  productList!: Product[];


  constructor(private productControllerService: ProductControllerService) { 
    
   }

  ngOnInit(): void {
    let products = this.productControllerService.getAllProducts();
    products.subscribe(data=>{
      let ObjStr = JSON.stringify(data); 
      let ObjJson = JSON.parse(ObjStr);
      this.productList=ObjJson;
    })
  }

  slideRibbonLeft(){
    let step: number;
    if(screen.width>700){
      step = 0.3*screen.width;
    }
    else{
      step = 0.8*screen.width;
    }

    this.slider.nativeElement.scrollBy({
      left: -step,
      behavior: 'smooth'
    });
}

slideRibbonRight(){
  let step: number;
  if(screen.width>700){
    step = 0.3*screen.width;
  }
  else{
    step = 0.8*screen.width;
  }

  this.slider.nativeElement.scrollBy({
      left: step,
      behavior: 'smooth'
    });

  }
}


