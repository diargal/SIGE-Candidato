import { Injectable } from '@angular/core';
import { URL, pred } from './conexion-bd.service';
import { HttpClient } from '@angular/common/http';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(
    private http: HttpClient,
    private token: DataSharingService
  ) {
  }

  getDataCampLogPresupuesto() {
    const url = `${URL}/api/candidato/getReportePresupuesto/`;
    return this.http.get(url, { headers: pred(this.token.token) });
  }

  getDataCampLogGatos() {
    const url = `${URL}/api/candidato/getReporteGasto/`;
    return this.http.get(url, { headers: pred(this.token.token) });
  }
}
