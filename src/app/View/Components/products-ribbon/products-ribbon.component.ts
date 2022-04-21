import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ProductControllerService } from 'src/app/Controller/Services/product-controller.service';
import { Product } from 'src/app/Model/Product';

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
  private count = 0;

  constructor(private productControllerService: ProductControllerService) { 
    
   }

  ngOnInit(): void {
    let p = this.productControllerService.getAllProducts();
    p.subscribe(data=>{
      var ObjStr = JSON.stringify(data); 
      let ObjJson = JSON.parse(ObjStr);
      this.productList=ObjJson;
    })
  }

  slideRibbonLeft(){
    console.log(screen.width);
    if(screen.width>700){
      var step = 0.3*screen.width;
    }
    else{
      var step = 0.8*screen.width;
    }

    this.slider.nativeElement.scrollBy({
      left: -step,
      behavior: 'smooth'
    });
}

slideRibbonRight(){

  if(screen.width>700){
    var step = 0.3*screen.width;
  }
  else{
    var step = 0.8*screen.width;
  }

  this.slider.nativeElement.scrollBy({
      left: step,
      behavior: 'smooth'
    });

  }
}


