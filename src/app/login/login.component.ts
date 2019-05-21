import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ConexionBDService } from '../services/conexion-bd.service';
import { TokenService } from '../services/token.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        public router: Router,
        public connection: ConexionBDService,
        public tokenService: TokenService
    ) { }

    private user: { correo: string, pass: string } = {
        correo: '',
        pass: ''
    };

    ngOnInit() { }

    onLoggedin() {
        this.connection.login(this.user.correo, this.user.pass).subscribe(
            data => {
                this.savedUser(data);
            }
        );

    }

    savedUser(info: any) {
        console.log(info);
        this.tokenService.setToken(info.accessToken);
        console.log(this.tokenService.getToken);
    }
}
