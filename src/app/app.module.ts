import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsViewComponent } from './View/Components/products-view/products-view.component';
import { ProductCardComponent } from './View/Components/product-card/product-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './View/Components/header/header.component';
import { FooterComponent } from './View/Components/footer/footer.component';
import { NavbarComponent } from './View/Components/navbar/navbar.component';
import { BlogComponent } from './View/Pages/blog/blog.component';
import { BlogContentComponent } from './View/Components/blog-content/blog-content.component';
import { CommentsBoxComponent } from './View/Components/comments-box/comments-box.component';
import { StoreComponent } from './View/Pages/store/store.component';
import { PurchaseComponent } from './View/Pages/purchase/purchase.component';
import { PurchaseContentComponent } from './View/Components/purchase-content/purchase-content.component';
import { ProductsRibbonComponent } from './View/Components/products-ribbon/products-ribbon.component';
import { LoginComponent } from './View/Pages/login/login.component';
import { LoginFormComponent } from './View/Components/login-form/login-form.component';
import { SignUpFormComponent } from './View/Components/sign-up-form/sign-up-form.component';
import {HttpClientModule} from '@angular/common/http';
import { VideoRibbonComponent } from './View/Components/video-ribbon/video-ribbon.component';
import { PrivacyComponent } from './View/Pages/privacy/privacy.component';




@NgModule({
  entryComponents: [
 
  ],
  declarations: [
    AppComponent,
    ProductsViewComponent,
    ProductCardComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BlogComponent,
    BlogContentComponent,
    CommentsBoxComponent,
    StoreComponent,
    PurchaseComponent,
    PurchaseContentComponent,
    ProductsRibbonComponent,
    LoginComponent,
    LoginFormComponent,
    SignUpFormComponent,
    VideoRibbonComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
