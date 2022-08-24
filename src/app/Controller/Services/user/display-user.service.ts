import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/Model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisplayUserService {

  userSubject$ = new Subject<User>();
  
  closeUserSessionSubject$ = new Subject<boolean>();

  selectRandomUserImage(){
    let imgNumber = this.getRandomInt(environment.max_avatar_number_images);
    return environment.avatars_main_route + imgNumber + '.jpg';
  }


  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

}
