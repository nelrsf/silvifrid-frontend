import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CookiesSessionService } from 'src/app/Controller/Cookies/cookies-session.service';
import { DisplayUserService } from 'src/app/Controller/Services/user/display-user.service';
import { User } from 'src/app/Model/user';
import { ProductsViewService } from '../../store/products-view/products-view.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;

  logIn = "Iniciar Sesión";
  account = "Mi Cuenta";
  blog = "Blog"
  store = "Tienda"
  searchPlaceholder = "Buscar";

  displayUser = false;
  user!: User;


  constructor(private displayUserService: DisplayUserService,
    private cookie: CookiesSessionService,
    private productsViewService: ProductsViewService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.setUserSessionSubject();
    this.setCloseSessionSubject();
    this.startSessionFromCookies();
  }

  collapse($event: any) {
    let tarElement = $event.target;
    tarElement.parentNode.parentNode.parentNode.classList.remove('show');
  }

  setUserSessionSubject() {
    this.displayUserService.userSubject$.subscribe(user => {
      this.user = user;
      if (user !== undefined) {
        this.displayUser = true;
      } else {
        this.displayUser = false;
      }
    })
  }

  setCloseSessionSubject() {
    this.displayUserService.closeUserSessionSubject$.subscribe(
      (input) => {
        this.displayUser = input;
      }
    )
  }

  startSessionFromCookies() {
    let cookies = this.cookie.getCookiesSession();
    let condition = cookies.email !== "" || cookies.displayName !== "";
    if (condition) {
      this.displayUser = true;
      this.user.email = cookies.email;
      this.user.displayName = cookies.displayName;
      this.user.photoURL = cookies.photoURL;
    }
  }

  filterProducts(event: any) {
    event.preventDefault();
    let value = event.target.value;
    this.productsViewService.applyProductsFilter.next(value);
  }

  keydownHandler(event: any) {
    if(event.key === 'Enter'){
      event.preventDefault();
    }
  }

}
