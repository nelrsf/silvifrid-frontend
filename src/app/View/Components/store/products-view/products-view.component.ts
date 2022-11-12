import { Component, OnInit } from '@angular/core';
import { ProductControllerService } from '../../../../Controller/Services/products/product-controller.service';
import { Product } from 'src/app/Model/product';



@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  public productList: Product[] = [];


  constructor(private productControllerService: ProductControllerService) { }

  ngOnInit(): void {
    let p = this.productControllerService.getAllProducts();
    p.subscribe(data=>{
      let ObjStr = JSON.stringify(data); 
      let ObjJson = JSON.parse(ObjStr);
      this.productList=ObjJson;
    })
  }

}
