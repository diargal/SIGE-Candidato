import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes-campania-localidades',
  templateUrl: './reportes-campania-localidades.component.html',
  styleUrls: ['./reportes-campania-localidades.component.scss']
})
export class ReportesCampaniaLocalidadesComponent implements OnInit {

  public typePage = 2;
  public dateReport = [
    {
      'name': 'Votos x líder',
      'dates': []
    },
    {
      'name': 'General P.V.',
      'dates': []
    },
    {
      'name': 'P.V. x líder',
      'dates': []
    },
    {
      'name': 'Cumplimiento x líder',
      'dates': []
    },
    {
      'name': 'Cumplimiento x localidad',
      'dates': []
    },
    {
      'name': 'Total votos x localidad',
      'dates': []
    }
  ];
  constructor() { }

  ngOnInit() {

  }

}
