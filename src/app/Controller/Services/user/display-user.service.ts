import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/Model/user';

@Injectable({
  providedIn: 'root'
})
export class DisplayUserService {

  userSubject$ = new Subject<User>();

  closeUserSessionSubject$ = new Subject<boolean>();

}
