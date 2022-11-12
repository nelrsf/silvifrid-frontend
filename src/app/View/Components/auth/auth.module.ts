import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginComponent } from '../../Pages/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    LoginFormComponent,
    SignUpFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    LoginFormComponent,
    SignUpFormComponent,
    LoginComponent
  ]
})
export class AuthModule { }
