import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iauth } from '../Interfaces/iauth';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { FacebookAuthProvider } from "firebase/auth"
import { CONFIG_APP } from 'src/app/config.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements Iauth{
  user: any;

  constructor() { }
  faceBookLogIn() {
    initializeApp(CONFIG_APP.firebaseConfig);
    const fbProvider = new FacebookAuthProvider();
    const auth = getAuth();
    return signInWithPopup(auth,fbProvider);
  };
}
