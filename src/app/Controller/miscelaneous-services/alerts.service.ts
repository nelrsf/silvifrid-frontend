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

  getEmailAlert(message: string) {
    return Swal.fire(
      {
        title: 'Hola!',
        input: 'email',
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

}
