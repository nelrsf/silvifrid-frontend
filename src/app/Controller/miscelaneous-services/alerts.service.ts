import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { /* TODO document why this constructor is empty */ }

  successAlert(message: string) {
    Swal.fire(
      {
        title: 'Genial!',
        text: message,
        timer: 5000,
        confirmButtonColor: '#3CC700'
      }
    )
  }

  successHtmlAlert(html: string) {
    Swal.fire(
      {
        title: 'Genial!',
        html: html,
        confirmButtonColor: '#3CC700'
      }
    )
  }

  failAlert(message: string) {
    Swal.fire(
      {
        icon: 'error',
        title: 'Oh, Parece que hubo un error',
        text: message,
        confirmButtonColor: '#CDCDCD'
      }
    )
  }

  getEmailAlert(message: string, defaultValue = "") {
    return Swal.fire(
      {
        title: 'Hola!, ingresa tu correo',
        input: 'email',
        inputValue: defaultValue,
        showCancelButton: true,
        text: message,
        confirmButtonText: 'Enviar',
        confirmButtonColor: '#3CC700'
      }
    )
  }


  getInputAlert(field: string, defaultValue = "") {
    return Swal.fire({
      title: 'Editar ' + field,
      input: 'text',
      inputValue: defaultValue,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Editar',
      showLoaderOnConfirm: true,
    })
  }

  getConfirmAlert(){
    return Swal.fire({
      title: 'Estas segur@?',
      text: "No queremos que te vayas, pero bueno :(, cuando quieras puedes volver a registrar tu cuenta, haata pronto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'green',
      confirmButtonText: 'Si, eliminala!',
      cancelButtonText: 'Quiero quedarme'
    });
  }

}
