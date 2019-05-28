import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../clases/user';
import { DataSharingService } from './data-sharing.service';

export const URL = 'http://192.168.5.73:3000';

export function pred(token: string) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'x-access-token': token
  });
  return headers;
}


@Injectable({
  providedIn: 'root'
})
export class ConexionBDService {


  constructor(
    private http: HttpClient,
    private token: DataSharingService
  ) {
    pred(token.token);
  }



  login(correo: string, contrasena: string) {

    const url = `${URL}/api/auth/login/`;
    const body: { correo: string, contrasena: string } = {
      correo: correo,
      contrasena: contrasena
    };

    return this.http.post(url, body, { headers: pred(this.token.token) });
  }

  getUser(): Observable<User> {

    const url = `${URL}/api/user/`;

    return this.http.get<User>(url, { headers: pred(this.token.token) });
  }


}
