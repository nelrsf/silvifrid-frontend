import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { CookiesSessionService } from '../../Cookies/cookies-session.service';
import { AlertsService } from '../../miscelaneous-services/alerts.service';
import { AuthService } from '../auth/auth.service';
import { DisplayUserService } from './display-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  user = new User();

  constructor(private cookieSessionService: CookiesSessionService,
              private displayUserService: DisplayUserService,
              private authService: AuthService,
              private alertService: AlertsService,
              private router: Router) { }

  startSession(user: any){
    this.setUserProperties(user);
    this.authService.setUser(this.user);
    this.cookieSessionService.setCookiesSession(this.user);
    this.cookieSessionService.setExpirationCallback(
      ()=>{
        this.displayUserService.closeUserSessionSubject$.next(false);
        this.router.navigate(['/store']);
        this.alertService.failAlert('Tu sesión ha expirado, vuelve a iniciar sesión!');
      });
    this.displayUserService.userSubject$.next(this.user);
  }

  closeSession(){
    this.authService.logOut().then(
      ()=>{
        this.cookieSessionService.closeCookieSession();
        let userData = this.cookieSessionService.getCookiesSession();
        this.setUserProperties(userData);
        this.displayUserService.userSubject$.next(this.user);
        this.displayUserService.closeUserSessionSubject$.next(false);
        this.alertService.successAlert("Has terminado tu sesión, hasta pronto!")
        this.router.navigate(['/login'])
      }
    ).catch(
      (reason)=>{
        console.error(reason);
        this.alertService.failAlert(reason.message);
      }
    )
  }

  setUserProperties(user: any){
    this.user.displayName = user.displayName!;
    this.user.email= user.email!;
    if(user.photoURL!==null){
      this.user.photoURL = user.photoURL!;
    }
    else{
      this.user.photoURL = "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
    }

  }

  getUserOnStateAuthChangedClass(){
    return new this.authService.aStateChangedClass(this.authService.auth);
  }

}
