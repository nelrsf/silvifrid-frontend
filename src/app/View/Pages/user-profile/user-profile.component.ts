import { Component, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/Controller/Services/user/user-session.service';
import { User } from 'src/app/Model/user';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PicturePickerComponent } from '../../Components/miscelaneus/dialogs/picture-picker/picture-picker/picture-picker.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = new User();

  constructor(private userSessionService: UserSessionService,
    private dialog: MatDialog) {
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
    })

    authStateChangedClass.setAuthStateChangedFunctions();
  }

  openImagePickerDialog() {
    let matDialogConfig = new MatDialogConfig();
    matDialogConfig.data = this.user;
    this.dialog.open(PicturePickerComponent, matDialogConfig);
  }

  logOut(event: Event) {
    event.preventDefault();
    this.userSessionService.closeSession();
  }
}
