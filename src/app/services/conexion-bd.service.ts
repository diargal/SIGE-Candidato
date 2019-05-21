import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { User } from '../clases/user';

@Injectable({
  providedIn: 'root'
})
export class ConexionBDService {

  private confiUrl;
  private headers;


  constructor(
    public http: HttpClient,
    public token: TokenService
  ) {

    this.headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8',
      'x-acces-token': token.token
    });
    this.confiUrl = 'http://192.168.5.73:3000';
  }


  login(correo: string, contrasena: string) {
    const url = `${this.confiUrl}/api/auth/login/`;
    const body: { correo: string, contrasena: string } = {
      correo: correo,
      contrasena: contrasena
    };
    return this.http.post(url, body, { headers: this.headers });
  }

  getUser(): Observable<User> {
    const url = `${this.confiUrl}/api/auth/login/`;
    return this.http.get<User>(url, { headers: this.headers });
  }

  /*getToken(): Observable<User>{

  }*/
}
