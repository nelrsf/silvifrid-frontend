import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/Controller/miscelaneous-services/alerts.service';
import { AuthService } from 'src/app/Controller/Services/auth/auth.service';
import { DisplayUserService } from 'src/app/Controller/Services/user/display-user.service';
import { User } from 'src/app/Model/user';



@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  @ViewChild("email")
  email!: ElementRef;

  @ViewChild("userName")
  userName!: ElementRef;

  @ViewChild("password1")
  password1!: ElementRef;

  @ViewChild("password2")
  password2!: ElementRef;

  @Output() goToLogin = new EventEmitter<void>();

  user!: User;


  constructor(private authService: AuthService,
    private alertServices: AlertsService,
    private displayUserService: DisplayUserService,
    private router: Router) { }

  passwordMatch = false;

  ngOnInit(): void {
    this.checkPasswordsMatch();
    this.user = new User();
  }

  emailPasswordSignIn(event: any) {
    event.preventDefault();
    let email = this.getFields().email;
    let password = this.getFields().password1;
    this.checkPasswordsMatch();
    if (email !== undefined && password !== undefined && this.passwordMatch) {
      this.authService.emailPasswordSignIn(email, password).then(
        this.onSuccessEmailPasswordSigIn
      ).catch(
        this.onFailEmailPasswordSigIn
      );
    }
  }

  checkPasswordsMatch() {
    let password1 = this.getFields().password1;
    let password2 = this.getFields().password2;
    if (password1 === password2 || (password1 == "") || (password2 == "")) {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }

  onSuccessEmailPasswordSigIn = (data: any) => {
    let userName = this.getFields().userName;
    let user = data.user;
    user.displayName = userName;
    user.photoURL = this.displayUserService.selectRandomUserImage();
    this.updateUserToDataBase(user).then(
      this.checkEmail
    ).catch(
      this.onFailEmailPasswordSigIn
    ).finally(() => {
      this.goToLogin.emit();
    });
  }

  onFailEmailPasswordSigIn = (error: any) => {
    this.alertUserSignInFailed(error.message);
  }

  getFields() {
    let email = this.email?.nativeElement?.value;
    let userName = this.userName?.nativeElement?.value;
    let password1 = this.password1?.nativeElement?.value;
    let password2 = this.password2?.nativeElement?.value;
    return {
      email: email,
      userName: userName,
      password1: password1,
      password2: password2
    }
  }

  updateUserToDataBase(user: User) {
    this.user = user;
    return this.authService.setUser(user);
  }

  alertUserSignedIn(message: string) {
    this.alertServices.successAlert(message);
  }

  alertUserSignInFailed(message: string) {
    this.alertServices.failAlert(message);
  }

  checkEmail = () => {
    this.authService.checkEmail().then(
      () => {
        this.alertUserSignedIn('Se ha enviado un correo de verificación a ' + this.user.email + ', no olvides revisar tu bandeja de spam');
      }
    ).catch(reason => {
      this.onFailEmailPasswordSigIn(reason)
    })
  }

}
