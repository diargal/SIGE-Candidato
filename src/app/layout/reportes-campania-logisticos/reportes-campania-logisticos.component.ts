import { Component, OnInit } from '@angular/core';

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
      'name': 'Reporte de presupuestos',
      'tittle': 'Estadísticas sobre los presupuestos',
      'dates': ['Localidad', 'Coordinador', 'Presupuesto'],
      'series': 0,
      'label': 1
    }, {
      'id': 2,
      'name': 'Reporte de gastos',
      'tittle': 'Estadísticas sobre gastos',
      'dates': ['Clasificación', 'Nombre del gasto', 'Localidad', 'Valor'],
      'series': 0,
      'label': 2
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
