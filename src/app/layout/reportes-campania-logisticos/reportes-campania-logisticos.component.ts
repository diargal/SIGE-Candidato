import { Component, OnInit } from '@angular/core';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';
import { ReportesService } from 'src/app/services/reportes.service';

@Component({
  selector: 'app-reportes-campania-logisticos',
  templateUrl: './reportes-campania-logisticos.component.html',
  styleUrls: ['./reportes-campania-logisticos.component.scss']
})
export class ReportesCampaniaLogisticosComponent implements OnInit {

  public typePage = 1;
  public dateReport = [
    {
      'id': 1,
      'route': 'getDataCampLogPresupuesto',
      'name': 'Reporte de presupuestos',
      'tittle': 'Estadísticas sobre los presupuestos',
      'dates': ['Localidad', 'Coordinador', 'Presupuesto'],
      'series': 0,
      'label': 1,
      'data': this.getDataPresupuesto()
    }, {
      'id': 2,
      'route': 'getDataCampLogGastos',
      'name': 'Reporte de gastos',
      'tittle': 'Estadísticas sobre gastos',
      'dates': ['Clasificación', 'Nombre del gasto', 'Localidad', 'Valor'],
      'series': 0,
      'label': 2,
      'data': this.getDataGasto()
    }
  ];

  constructor(
    private conexion: ReportesService
  ) { }

  ngOnInit() {
  }

  getDataPresupuesto() {
    this.conexion.getDataCampLogPresupuesto().subscribe(
      data => {
        console.log(data);
      }
    );
  }

  getDataGasto() {
    this.conexion.getDataCampLogGatos().subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
