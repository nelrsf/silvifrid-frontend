import { Component, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/Controller/Services/user/user-session.service';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = new User();

  constructor(private userSessionService: UserSessionService) {
  }

  ngOnInit(): void {
    this.setUserOnStateAuthChanged();
  }

  setUserOnStateAuthChanged() {
    let authStateChangedClass = this.userSessionService.getUserOnStateAuthChangedClass();

    authStateChangedClass.setUserErrorFunction((error: any) => {
      console.log(error);
    })

    authStateChangedClass.setUserSuccessFunction((user: User) => {
      this.user = user;
      console.log(this.user.metadata.createdAt);
    })

    authStateChangedClass.setAuthStateChangedFunctions();
  }

  logOut(event: Event) {
    event.preventDefault();
    this.userSessionService.closeSession();
  }
}
