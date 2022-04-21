import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faBars = faBars;
  @ViewChild('navbar') navbar: ElementRef | undefined;

  title = "Silvifrid Organic"
  subtitle = "Aromas y Belleza"
  description = "Productos naturales para el cuidado de tu piel"
  @ViewChild('edesc') eDesc: ElementRef | undefined;
  @ViewChild('etitle') eTitle: ElementRef | undefined;
  @ViewChild('esubtitle') eSubtitle: ElementRef | undefined;

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {

  }

  @HostListener("window:scroll", ['$event'])
  public doSomethingOnInternalScroll($event:Event){
    var scrollFactor = 5*window.scrollY/window.innerHeight;
    if(scrollFactor>1){
      scrollFactor=1;
    }
    const elementTitle:any = this.eTitle?.nativeElement;
    const elementSubtitle:any = this.eSubtitle?.nativeElement;
    const elementDesc:any = this.eDesc?.nativeElement;
    this.renderer2.setStyle(elementTitle, 'color', "rgba(255,255,255,"+(1-scrollFactor*0.8)+")");
    this.renderer2.setStyle(elementSubtitle, 'color', "rgba(255,255,255,"+(1-scrollFactor)+")");
    this.renderer2.setStyle(elementDesc, 'color', "rgba(255,255,255,"+(1-scrollFactor*0.9)+")");
  }

}


