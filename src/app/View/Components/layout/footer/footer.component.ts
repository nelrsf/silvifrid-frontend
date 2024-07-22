import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  

  footDesc ="Somos una marca santandereana comercializadora de productos de belleza y cuidado personal."

  faPaperPlane = faPaperPlane; 
  faInstagram =faInstagram;
  faFacebook =faFacebook;
  faWhatsapp =faWhatsapp;

  constructor() { 

  }

  ngOnInit(): void {

  }

}
