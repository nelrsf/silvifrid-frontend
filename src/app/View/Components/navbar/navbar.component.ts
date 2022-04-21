import { Component, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  
  logIn="Iniciar Sesión";
  account="Mi Cuenta";
  blog="Blog"
  store="Tienda"
  searchPlaceholder="Buscar";

  constructor(private renderer2: Renderer2, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ['$event'])
  public doSomethingOnInternalScroll($event:Event){
 
  }


  collapse($event: any){
    let tarElement = $event.target;
    tarElement.parentNode.parentNode.parentNode.classList.remove('show');
  }

}
