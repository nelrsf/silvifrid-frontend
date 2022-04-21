import { Component, OnInit } from '@angular/core';
import { ProductControllerService } from 'src/app/Controller/Services/product-controller.service';
import { Product } from 'src/app/Model/Product';



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
      var ObjStr = JSON.stringify(data); 
      let ObjJson = JSON.parse(ObjStr);
      this.productList=ObjJson;
    })
  }

}
