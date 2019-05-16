import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ConexionBDService } from '../services/conexion-bd.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        public router: Router,
        public connection: ConexionBDService
    ) { }

    ngOnInit() { }

    onLoggedin() {
        this.connection;
    }
}
