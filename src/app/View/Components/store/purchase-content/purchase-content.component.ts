import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { ProductControllerService } from 'src/app/Controller/Services/products/product-controller.service';
import { Product } from 'src/app/Model/Product';

@Component({
  selector: 'app-purchase-content',
  templateUrl: './purchase-content.component.html',
  styleUrls: ['./purchase-content.component.css']
})
export class PurchaseContentComponent implements OnInit {
  faPlus =faPlus;
  faMinus =faMinus;

  productId:string ="";
  product:Product = new Product();
  subscription: Subscription = new Subscription();
  indxImg: number = 0;

  constructor(private route: ActivatedRoute, private routeEvent: Router, private productControllerService: ProductControllerService) {
    this.subscription = routeEvent.events.subscribe((event)=>{
      if(event instanceof NavigationStart){
         this.updateContent();
      }
    })
   }

  ngOnInit(): void {
    this.updateContent();
  }

  updateContent(){
    window.scrollTo(0, 0);
    this.route.queryParams.subscribe(params=>{
      this.productId = params['_id'];
      let p =this.productControllerService.getProductByID(this.productId)
      p.subscribe(data=>{
        let ObjStr = JSON.stringify(data); 
        let ObjJson = JSON.parse(ObjStr);
        this.product=ObjJson;
        this.indxImg = 0;
      })
    })
  }

  selectImg(ind:number){
    this.indxImg = ind;
  }

}
