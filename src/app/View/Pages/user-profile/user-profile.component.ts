import { Component, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/Controller/Services/user/user-session.service';
import { User } from 'src/app/Model/user';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PicturePickerComponent } from '../../Components/miscelaneus/dialogs/picture-picker/picture-picker/picture-picker.component';
import { Router } from '@angular/router';
import { deleteUser } from 'firebase/auth';
import { AuthService } from 'src/app/Controller/Services/auth/auth.service';
import { AlertsService } from 'src/app/Controller/miscelaneous-services/alerts.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = new User();

  constructor(private userSessionService: UserSessionService,
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertsService) {
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
      if (user === null) {
        this.userSessionService.closeSession();
        this.router.navigate(['/store']);
      }
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

  showDialogConfirmDleteAccount(event: Event) {
    event.preventDefault();
    this.alertService.getConfirmAlert().then(
      (result) => {
        if (result.isConfirmed) {
          this.deleteAccount(event);
        }
      }).catch((reason) => {
        this.alertService.failAlert(reason.message);
      });
  }

  deleteAccount(_event: Event) {
    deleteUser(this.authService.getUser()).then(
      () => {
        this.alertService.successAlert('Tu cuenta ha sido eliminada correctamente')
      }
    ).catch((error) => {
      this.alertService.failAlert(error.message);
    }).finally(() => {
      this.router.navigate(['/store']);
    });
  }
}
