import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/Model/user';

@Injectable({
  providedIn: 'root'
})
export class CookiesSessionService {

  private timerMinutes = 30;

  constructor(private cookie: CookieService) { /* TODO document why this constructor is empty */ }

  setExpirationCallback(expireFunction: () => void) {
    setTimeout(expireFunction, this.timerMinutes * 60 * 1000);
  }

  setCookiesSession(user: User) {
    let dateTime = new Date();
    dateTime.setMinutes(dateTime.getMinutes() + this.timerMinutes)
    this.cookie.set("displayName", user.displayName, dateTime);
    this.cookie.set("email", user.email, dateTime);
    this.cookie.set("photURL", user.photoURL, dateTime);
  }

  getCookiesSession() {
    return {
      email: this.cookie.get("email"),
      displayName: this.cookie.get("displayName"),
      photoURL: this.cookie.get("photURL")
    }
  }

  closeCookieSession() {
    this.cookie.delete("displayName");
    this.cookie.delete("email");
    this.cookie.delete("photoURL");
  }



}
