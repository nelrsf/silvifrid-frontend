import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies-popup',
  templateUrl: './cookies-popup.component.html',
  styleUrls: ['./cookies-popup.component.css']
})
export class CookiesPopupComponent implements OnInit {

  public cookiesPrivacyAcepted!: boolean;
  private cookiesAceptedFlagName = "cookies_privacy_acepted";

  constructor(private cookiesService: CookieService) { }

  ngOnInit(): void {
    this.cookiesPrivacyAcepted = this.cookiesService.get(this.cookiesAceptedFlagName) === "true";
  }

  closeCookiesPrivacy() {
    this.cookiesService.set("cookies_privacy_acepted", "true");
  }

}
