import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-administrar-evento',
  templateUrl: './administrar-evento.component.html',
  styleUrls: ['./administrar-evento.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarEventoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
