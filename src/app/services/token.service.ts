import { Injectable } from '@angular/core';
import { User } from '../clases/user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token = '';
  private user: User;

  constructor() { }

  public setToken(newToken: string) {
    this.token = newToken;
  }

  public getToken() {
    return this.token;
  }

  public setUser(newUser: User) {
    this.user = newUser;
  }

   get user() {

    return this.user;
  }
}
