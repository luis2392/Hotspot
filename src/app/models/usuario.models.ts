export class Usuario {

    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public img?: string,
        public role?: string,
        public google?: boolean,
        public _id?: string
        // Cuando los cambios llevan ? son opcionales, del primero de arriba hacia abajo deben ser iguales
    ) { }
}
