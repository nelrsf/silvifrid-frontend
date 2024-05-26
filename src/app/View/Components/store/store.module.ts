import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PurchaseContentComponent } from './purchase-content/purchase-content.component';
import { ProductsRibbonComponent } from './products-ribbon/products-ribbon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from '../../Pages/store/store.component';
import { PurchaseComponent } from '../../Pages/purchase/purchase.component';
import { LayoutModule } from '../layout/layout.module';
import { MiscelaneusModule } from '../miscelaneus/miscelaneus.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaymentSumaryComponent } from './payment-confirm/payment-sumary.component';


@NgModule({
  declarations: [
    ProductsViewComponent,
    ProductCardComponent,
    PurchaseContentComponent,
    ProductsRibbonComponent,
    StoreComponent,
    PurchaseComponent,
    PaymentSumaryComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,   
    FormsModule,
    LayoutModule,
    MiscelaneusModule,
    MatProgressBarModule,
    MatPaginatorModule
  ],
  exports: [
    ProductsViewComponent,
    ProductCardComponent,
    PurchaseContentComponent,
    ProductsRibbonComponent,
    StoreComponent,
    PurchaseComponent,
  ]
})
export class StoreModule { }
