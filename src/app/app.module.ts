import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsViewComponent } from './View/Components/store/products-view/products-view.component';
import { ProductCardComponent } from './View/Components/store/product-card/product-card.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './View/Components/layout/header/header.component';
import { FooterComponent } from './View/Components/layout/footer/footer.component';
import { NavbarComponent } from './View/Components/layout/navbar/navbar.component';
import { BlogComponent } from './View/Pages/blog/blog.component';
import { BlogContentComponent } from './View/Components/blog/blog-content/blog-content.component';
import { CommentsBoxComponent } from './View/Components/miscelaneus/comments-box/comments-box.component';
import { StoreComponent } from './View/Pages/store/store.component';
import { PurchaseComponent } from './View/Pages/purchase/purchase.component';
import { PurchaseContentComponent } from './View/Components/store/purchase-content/purchase-content.component';
import { ProductsRibbonComponent } from './View/Components/store/products-ribbon/products-ribbon.component';
import { LoginComponent } from './View/Pages/login/login.component';
import { LoginFormComponent } from './View/Components/auth/login-form/login-form.component';
import { SignUpFormComponent } from './View/Components/auth/sign-up-form/sign-up-form.component';
import {HttpClientModule} from '@angular/common/http';
import { VideoRibbonComponent } from './View/Components/miscelaneus/video-ribbon/video-ribbon.component';
import { PrivacyComponent } from './View/Pages/privacy/privacy.component';
import { UserProfileComponent } from './View/Pages/user-profile/user-profile.component';
import { CookiesPrivacyComponent } from './View/Pages/cookies-privacy/cookies-privacy.component';
import { CookiesPopupComponent } from './View/Components/legal/cookies-popup/cookies-popup.component';
import { ProfileInfoComponent } from './View/Components/user/profile-info/profile-info/profile-info.component';




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
    UserProfileComponent,
    CookiesPrivacyComponent,
    CookiesPopupComponent,
    ProfileInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
