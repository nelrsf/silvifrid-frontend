import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/Controller/Services/user/user-session.service';
import { User } from 'src/app/Model/user';
import { faEdit, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Controller/Services/auth/auth.service';
import { AlertsService } from 'src/app/Controller/miscelaneous-services/alerts.service';
import { SweetAlertResult } from 'sweetalert2';
import { RecaptchaVerifier } from 'firebase/auth';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PhoneDialogComponent } from '../../../miscelaneus/dialogs/phone-dialog/phone-dialog/phone-dialog.component';

export interface TableData {
  field: string;
  value: string | null;
  action: { edit: boolean, check: boolean };
}

const ELEMENT_DATA: TableData[] = [
  { field: 'Nombre', value: '', action: { edit: true, check: false } },
  { field: 'Email', value: '', action: { edit: true, check: true } },
  { field: 'Número telefónico', value: '', action: { edit: true, check: false } },
  { field: 'Fecha de creación', value: '', action: { edit: false, check: false } },
];

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  faEdit = faEdit;
  faCheck = faCheckCircle;
  @Input() user!: User;


  displayedColumns: string[] = ['field', 'value', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(private userSessionService: UserSessionService,
    private datePipe: DatePipe,
    private authService: AuthService,
    private alertService: AlertsService,
    private dialog: MatDialog) { }

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
      this.dataSource[0].value = user?.displayName;
      this.dataSource[1].value = user?.email;
      this.dataSource[2].value = user?.phoneNumber;
      this.dataSource[3].value = this.datePipe.transform(user?.metadata?.createdAt);
    })

    authStateChangedClass.setAuthStateChangedFunctions();
  }

  showField(value: any) {
    return value !== 'null' ? value : ' ';
  }

  getPupUpCheckField(element: any) {
    switch (element.field) {
      case ELEMENT_DATA[1].field:
        this.authService.checkEmail().then(
          () => {
            this.alertService.successAlert('Se ha enviado un correo a tu e-mail ' + ELEMENT_DATA[1].value + ', si no encuentras el correo, revisa tu bandeja de spam')
          }).catch(
            (error) => {
              this.alertService.failAlert(error.message);
            });
        break;
      case ELEMENT_DATA[2].field:
        break;
    }
  }

  getPupUpEditField(element: any) {
    switch (element.field) {
      case ELEMENT_DATA[0].field:
        this.alertService.getInputAlert(element.field, element.value).then(this.editName);
        break;
      case ELEMENT_DATA[1].field:
        this.alertService.getEmailAlert(element.field, element.value).then(this.editEmail);
        break;
      case ELEMENT_DATA[2].field:
        this.openPhoneInputDialog();
    }
  }

  editName = (dialogData: SweetAlertResult<any>) => {
    if (dialogData.isConfirmed) {
      ELEMENT_DATA[0].value = dialogData.value;
      let user = new User();
      user.displayName = dialogData.value;
      this.authService.setUser(user).then(
        () => {
          this.alertService.successAlert('Nombre editado correctamente');
        }).catch(
          (error: any) => {
            this.alertService.failAlert(error.message ? error.message : error);
          });
    }
  }

  editPhoneNomber = (dialogData: SweetAlertResult<any>) => {
    if (dialogData.isConfirmed) {
      ELEMENT_DATA[2].value = dialogData.value;
      let user = new User();
      user.phoneNumber = dialogData.value;
      this.authService.setUser(user).then(
        () => {
          this.alertService.successAlert('Número telefónico editado correctamente');
        }).catch(
          (error: any) => {
            this.alertService.failAlert(error.message ? error.message : error);
          });
    }
  }

  editEmail = (dialogData: SweetAlertResult<any>) => {
    if (dialogData.isConfirmed) {
      ELEMENT_DATA[1].value = dialogData.value;
      let user = new User();
      user.email = dialogData.value;
      this.authService.setEmail(dialogData.value).then(
        () => {
          this.alertService.successAlert('Email editado correctamente');
        }).catch(
          (error: any) => {
            this.alertService.failAlert(error.message ? error.message : error);
          });
    }
  }

  openPhoneInputDialog() {
    let matDialogConfig = new MatDialogConfig();
    matDialogConfig.data = this.authService.auth;
    this.dialog.open(PhoneDialogComponent);
  }
}
