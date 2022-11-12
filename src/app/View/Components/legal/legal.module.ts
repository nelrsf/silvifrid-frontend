import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from '../../Pages/privacy/privacy.component';
import { CookiesPrivacyComponent } from '../../Pages/cookies-privacy/cookies-privacy.component';
import { CookiesPopupComponent } from './cookies-popup/cookies-popup.component';



@NgModule({
  declarations: [
    PrivacyComponent,
    CookiesPrivacyComponent,
    CookiesPopupComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrivacyComponent,
    CookiesPrivacyComponent,
    CookiesPopupComponent,
  ]
})
export class LegalModule { }
