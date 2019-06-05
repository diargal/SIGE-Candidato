import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { ConexionBDService } from '../services/conexion-bd.service';
import Swal from 'sweetalert2';
import { AuthGuard } from '../shared';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private connection: ConexionBDService,
        private tokenService: DataSharingService,
        private auth: AuthGuard
    ) { }

    public user: { correo: string, pass: string } = {
        correo: '',
        pass: ''
    };

    ngOnInit() { }

    onLoggedin() {
        this.activeSession();
        this.connection.login(this.user.correo, this.user.pass).subscribe(
            data => {
                console.log(data);

                this.savedUser(data);
            },
            err => {
                console.log(err);
                Swal.fire('Oppps!', 'Se perdió la conexión con la base de datos. Vuelva a intentarlo.', 'error');
            }
        );

    }

    savedUser(info: any) {
        if (info.auth) {
            this.tokenService.token = info.accessToken;
            this.connection.getUser().subscribe(
                data => {
                    if (data.type === 'candidato') {
                        this.tokenService.serviceData = data;
                        this.activeSession();
                    } else {
                        Swal.fire('Error de ingreso', 'Usted no es un candidato.', 'error');
                    }
                }
            );
        } else {
            Swal.fire('Credenciales incorrectas', 'Verifique el correo o la contraseña.', 'error');
        }
    }

    activeSession() {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('qwerty', this.tokenService.token);
        this.auth.canActivate();
        this.router.navigate(['/dashboard']);
    }
}
