import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './View/Pages/login/login.component';
import { BlogComponent } from './View/Pages/blog/blog.component';
import { PurchaseComponent } from './View/Pages/purchase/purchase.component';
import { StoreComponent } from './View/Pages/store/store.component';
import { LoginFormComponent } from './View/Components/login-form/login-form.component';
import { SignUpFormComponent } from './View/Components/sign-up-form/sign-up-form.component';
import { PrivacyComponent } from './View/Pages/privacy/privacy.component';


const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'store', component: StoreComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'login', 
    component: LoginComponent,
   children: [
    { path: 'login-form', component: LoginFormComponent},
    { path: 'signup-form', component: SignUpFormComponent}
   ] },
  { path: '', component: StoreComponent },
  { path: 'privacy', component: PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
