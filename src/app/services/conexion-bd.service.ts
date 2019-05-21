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


  login(usuario: String, pass: String) {
    const url = `${this.confiUrl}/loginAdmin/${usuario}/${pass}`;

    return this.http.get(url, { headers: this.headers });
  }

  /*getToken(): Observable<User>{

  }*/
}
