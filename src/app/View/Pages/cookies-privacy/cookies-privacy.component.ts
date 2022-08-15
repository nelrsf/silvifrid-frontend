import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies-privacy',
  templateUrl: './cookies-privacy.component.html',
  styleUrls: ['./cookies-privacy.component.css']
})
export class CookiesPrivacyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
