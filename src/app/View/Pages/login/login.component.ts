import { Component, OnInit } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AlertsService } from 'src/app/Controller/miscelaneous-services/alerts.service';
import { AuthService } from 'src/app/Controller/Services/auth/auth.service';
import { UserSessionService } from 'src/app/Controller/Services/user/user-session.service';
import { User } from 'src/app/Model/user';


@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  readonly initMode = {
    LOGIN_MODE: 0,
    SIGNUP_MODE: 1
  }

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGoogle = faGoogle;

  logOption = this.initMode.LOGIN_MODE;
  user = new User();


  constructor(private authService: AuthService,
    private alertService: AlertsService,
    private userSessionService: UserSessionService) { }
  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  goToLogIn() {
    this.logOption = this.initMode.LOGIN_MODE;
    window.scrollTo(0, 0);
  }

  goToSignUp() {
    this.logOption = this.initMode.SIGNUP_MODE;
    window.scrollTo(0, 0);
  }

  fbLogin() {
    this.authService.faceBookLogIn().then((res) => {
      this.userSessionService.startSession(res.user);
    }).catch((error) => {
      this.alertService.failAlert("Error en inicio de sesión: " + error.message)
    })
  }

  twLogin() {
    this.authService.twitterLogIn().then((res) => {
      this.userSessionService.startSession(res.user);
    }).catch((error) => {
      this.alertService.failAlert("Error en inicio de sesión: " + error.message)
    })
  }

  ggLogin() {
    this.authService.googleLogin().then((res) => {
      this.userSessionService.startSession(res.user);
    }).catch((error) => {
      this.alertService.failAlert("Error en inicio de sesión: " + error.message)
    })
  }
  

  rememberPassword() {
    let dialogResult = this.alertService.getEmailAlert("¿Problemas con tu contraseña?, no te preocupes, dinos ¿cúal es tu correo y te ayudaremos?");
    dialogResult.then(
      (data) => {
        if (data.isConfirmed) {
          this.authService.rememberPassword(data.value).then(
            () => {
              this.alertService.successAlert("Tu correo de recuperación de contraseña fue enviado!");
            }
          ).catch(
            (reason) => {
              this.alertService.failAlert(reason.message);
            }
          )
        }
      }
    )
  }
}
