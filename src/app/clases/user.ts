export class User {

    constructor(user?: any) {
        this.cedula = user && user.cedula || '';
        this.email = user && user.email || '';
        this.name = user && user.name || '';
        this.secondName = user && user.secondName || '';
        this.lastname = user && user.lastname || '';
        this.secondLastname = user && user.secondLastname || '';
        this.password = user && user.password || '';
        this.type = user && user.type || '';
        this.address = user && user.address || '';
        this.phone = user && user.phone || '';
    }

    static ADMINISTRADOR = 'administrador';
    static DIGITADOR = 'digitador';
    static COORDINADOR = 'coordinador';
    static TESTIGO = 'testigo';
    static CANDIDATO = 'candidato';
    static LIDER = 'lider';

    cedula: string;
    email: string;
    name: string;
    secondName: string;
    lastname: string;
    secondLastname: string;
    password: string;
    type: string;
    address: string;
    phone: string;

    public check() {
        if (!this.cedula) {
            return false;
        }
        if (!this.name) {
            return false;
        }
        if (!this.lastname) {
            return false;
        }

        return true;
    }
}
