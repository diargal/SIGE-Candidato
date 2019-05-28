import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { User } from '../clases/user';

@Injectable({
  providedIn: 'root'
})
export class ConexionBDService {


  constructor(
    public http: HttpClient,
    public token: TokenService
  ) {
    this.pred(token.token);
    this.confiUrl = 'http://192.168.5.73:3000';
  }

  private confiUrl;
  private headers;
f;

  private pred(token: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'x-access-token': token
    });
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
    this.pred(this.token.token);
    const url = `${this.confiUrl}/api/user/`;

    return this.http.get<User>(url, { headers: this.headers });
  }
}
