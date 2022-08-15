import { Injectable } from '@angular/core';
import { Iauth } from '../../Interfaces/ILoginMethods/iauth';
import { initializeApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, sendPasswordResetEmail, onAuthStateChanged, signOut } from 'firebase/auth';
import { CONFIG_APP } from 'src/app/config.json';
import { User } from 'src/app/Model/user';
import { Ierror } from '../../Interfaces/IAuthStateChanged/ierror';
import { Isuccess } from '../../Interfaces/IAuthStateChanged/isuccess';




@Injectable({
  providedIn: 'root'
})
export class AuthService implements Iauth {

  private _auth: any;


  public aStateChangedClass = class implements Ierror, Isuccess {

    auth: any;
    error: any;
    success: any;

    constructor(auth: any) {
      this.auth = auth;
    }
    setUserErrorFunction(errorFunc: (error: any) => void): void {
      this.error = errorFunc;
    }
    setUserSuccessFunction(successFunc: (user: any) => void): void {
      this.success = successFunc;
    }

    setAuthStateChangedFunctions(): void {
      onAuthStateChanged(this.auth, this.success, this.error)
    }


  }


  constructor() {
    initializeApp(CONFIG_APP.firebaseConfig);
    this.auth = getAuth();
  }


  public get auth(): any {
    return this._auth;
  }
  public set auth(value: any) {
    this._auth = value;
  }

  emailPasswordSignIn(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  emailPasswordLogIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  googleLogin() {
    const ggProvider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, ggProvider)
  }

  twitterLogIn() {
    const twProvider = new TwitterAuthProvider();
    return signInWithPopup(this.auth, twProvider);
  }

  checkEmail() {
    return sendEmailVerification(this.auth.currentUser, null);
  }

  faceBookLogIn() {
    const fbProvider = new FacebookAuthProvider();
    return signInWithPopup(this.auth, fbProvider);
  }

  setUser(user: User) {
    return updateProfile(this.auth.currentUser,
      {
        displayName: user.displayName,
        photoURL: user.photoURL
      });
  }

  getUser() {
    return this.auth.currentUser;
  }

  rememberPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  logOut() {
    return signOut(this.auth);
  }

}
