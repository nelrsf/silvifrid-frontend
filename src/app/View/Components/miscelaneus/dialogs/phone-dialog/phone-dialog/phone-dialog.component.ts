import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PhoneAuthProvider, RecaptchaVerifier, updatePhoneNumber } from 'firebase/auth';
import { AlertsService } from 'src/app/Controller/miscelaneous-services/alerts.service';
import { AuthService } from 'src/app/Controller/Services/auth/auth.service';
import { PhoneInputComponent } from '../../../phone-input/phone-input.component';
import { PicturePickerComponent } from '../../picture-picker/picture-picker/picture-picker.component';

@Component({
  selector: 'app-phone-dialog',
  templateUrl: './phone-dialog.component.html',
  styleUrls: ['./phone-dialog.component.css']
})
export class PhoneDialogComponent implements OnInit, AfterViewInit {

  r!: RecaptchaVerifier;
  token!: string;
  dialogMode = 'sendVerifyCode';
  @ViewChild('code_field') codeField!: ElementRef;
  @ViewChild('phone_number') phoneNumberComponent!: PhoneInputComponent;


  constructor(private authService: AuthService,
    private matDialogRef: MatDialogRef<PicturePickerComponent>,
    private alertService: AlertsService) { }

  ngAfterViewInit(): void {
    this.r = new RecaptchaVerifier('recaptcha-container', {}, this.authService.auth);
    this.r.render().then((value) => {
      console.log(value);
    }).catch((reason) => {
      console.log(reason);
      this.alertService.failAlert(reason.message);
      this.matDialogRef.close();
    })
  }

  ngOnInit(): void {
  }

  sendVerificationCode() {
    let phoneNumber = this.phoneNumberComponent.phoneNumber;
    this.authService.updatePhoneNumber(phoneNumber, this.r).then(
      (data) => {
        this.token = data;
        this.dialogMode = 'verifyCode';
      }).catch((reason) => {
        console.log(reason)
        this.alertService.failAlert(reason.message);
        this.matDialogRef.close();
      });
  }

  validateCode(_event: any) {
    let code = this.codeField.nativeElement.value;
    const phoneCredential = PhoneAuthProvider.credential(this.token, code);
    updatePhoneNumber(this.authService.getUser(), phoneCredential).then(
      () => {
        this.alertService.successAlert('Número validado correctamente');
        this.matDialogRef.close();
      }).catch(
        (reason) => {
          console.log(reason)
          this.alertService.failAlert(reason.message);
          this.matDialogRef.close();
        })
  }

}
