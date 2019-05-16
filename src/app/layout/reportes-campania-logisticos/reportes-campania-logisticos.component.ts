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
      'name': 'Reporte de gastos',
      'dates': []
    },
    {
      'name': 'Reporte de presupuestos',
      'dates': []
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
