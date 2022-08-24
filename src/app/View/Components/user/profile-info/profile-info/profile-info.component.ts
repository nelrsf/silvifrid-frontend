import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/Controller/Services/user/user-session.service';
import { User } from 'src/app/Model/user';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Controller/Services/auth/auth.service';
import { AlertsService } from 'src/app/Controller/miscelaneous-services/alerts.service';
import { SweetAlertResult } from 'sweetalert2';

export interface TableData {
  field: string;
  value: string | null;
  action: string;
}

const ELEMENT_DATA: TableData[] = [
  { field: 'Nombre', value: '', action: 'H' },
  { field: 'Email', value: '', action: 'He' },
  { field: 'Número telefónico', value: '', action: 'Li' },
  { field: 'Fecha de creación', value: '', action: 'Be' },
];

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  faEdit = faEdit;
  @Input() user!: User;

  displayedColumns: string[] = ['field', 'value', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(private userSessionService: UserSessionService,
    private datePipe: DatePipe,
    private authService: AuthService,
    private alertService: AlertsService) { }

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
      console.log(user);
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

  getPupUpEditField(element: any) {
    switch (element.field) {
      case ELEMENT_DATA[0].field:
        this.alertService.getInputAlert(element.field, element.value).then(this.editName);
        break;
      case ELEMENT_DATA[1].field:
        this.alertService.getInputAlert(element.field, element.value).then(this.editEmail);
        break;
      case ELEMENT_DATA[2].field:
        this.alertService.getInputAlert(element.field, element.value).then(this.editPhoneNomber);
        break;
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



}
