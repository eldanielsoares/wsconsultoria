import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async loginService(email: string, password: string) {
    await this.auth.setPersistence('local');
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async signupService(email: string, password: string) {
    await this.auth.setPersistence('local');
    return await this.auth.createUserWithEmailAndPassword(email, password);
  }

  async signOutService() {
    return await this.auth.signOut();
  }
}
