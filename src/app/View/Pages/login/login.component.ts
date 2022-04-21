import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/Controller/Services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faGoogle = faGoogle;

  logOption = "login";
  user: any = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.goToLogIn();
  }

  goToLogIn(){
    this.router.navigate(['login-form'], {relativeTo: this.route})
    this.logOption = "signup";
  }

  goToSignUp(){
    this.logOption = "login";
    this.router.navigate(['signup-form'], {relativeTo: this.route})
  }

  fbLogin(){
    this.authService.faceBookLogIn().then((res)=>{
      this.user = res.user;
    }).catch((error)=>{
      console.log("Error en inicio de sesión: ", error)
    })
  }

  igLogin(){
    window.location.href ="https://silvifrid-server.herokuapp.com/login/instagram";
  }

}
