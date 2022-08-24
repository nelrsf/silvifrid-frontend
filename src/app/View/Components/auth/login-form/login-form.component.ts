import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/Controller/miscelaneous-services/alerts.service';
import { AuthService } from 'src/app/Controller/Services/auth/auth.service';
import { UserSessionService } from 'src/app/Controller/Services/user/user-session.service';
import { User } from 'src/app/Model/user';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @ViewChild("email")
  email!: ElementRef;

  @ViewChild("password")
  password!: ElementRef;

  user = new User();

  constructor(private authService: AuthService,
              private alertService: AlertsService,
              private userSessionService: UserSessionService,
              private router: Router) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  emailPasswordLogin(event: Event){
    event.preventDefault();
    let email = this.email?.nativeElement?.value;
    let password = this.password?.nativeElement?.value;
    if(email!==undefined && password !==undefined)
    {
      this.authService.emailPasswordLogIn(email, password)
      .then((data)=>{
        if(data.user.emailVerified){
          this.userSessionService.startSession(data.user);
          this.alertService.successAlert("Bienvenid@ " + data.user.displayName);
          this.router.navigate(['/store']);
        }
        else{
          this.alertService.failAlert("Lo sentimos, no has verificado tu correo aún")
        }
      })
      .catch((reason)=>{
        this.alertService.failAlert(reason.message);
      })
    }
  }
}
