import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-administrar-gastos',
  templateUrl: './administrar-gastos.component.html',
  styleUrls: ['./administrar-gastos.component.scss'],
  animations: [routerTransition()]
})
export class AdministrarGastosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
