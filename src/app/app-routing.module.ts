import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './View/Pages/login/login.component';
import { BlogComponent } from './View/Pages/blog/blog.component';
import { PurchaseComponent } from './View/Pages/purchase/purchase.component';
import { StoreComponent } from './View/Pages/store/store.component';
import { PrivacyComponent } from './View/Pages/privacy/privacy.component';
import { UserProfileComponent } from './View/Pages/user-profile/user-profile.component';
import { CookiesPrivacyComponent } from './View/Pages/cookies-privacy/cookies-privacy.component';
import { CartComponent } from './View/Pages/Cart/cart-component/cart.component';


const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'store', component: StoreComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent},
  { path: '', component: StoreComponent },
  { path: 'privacy', component: PrivacyComponent},
  { path: 'cookies', component: CookiesPrivacyComponent},
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
