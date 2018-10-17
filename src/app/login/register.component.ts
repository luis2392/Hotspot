import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';

import swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _userService: UsuarioService,
    public router: Router

  ) { }

  // Sirve para validar dos parámetros sean iguales, 1 caso es la validación del correo
  sonIguales(campo1: string, campo2: string) {

    return (group: FormGroup) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2) {
        return null;
      }
      return{
        sonIguales: true
      };
    };
  }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
        nombre: new FormControl(null, Validators.required), // Campo obligatorio, si necesito mandar más lo mando en arreglo []
        correo: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        password2: new FormControl(null, Validators.required),
        condiciones: new FormControl( false),
        // Mandamos a llamar la función anteriormente creada y le enviamos los dos parámetros que queremos que compare
    }, { validators: this.sonIguales( 'password', 'password2') }); 

    this.forma.setValue({
      nombre: 'Juan Perez',
      correo: 'jperez@miumg.edu.g',
      password: '123456',
      password2: '123456',
      condiciones: true
    });
  }

  registrarUsuario() {

    if ( this.forma.invalid ) {
      return;
    }

    if ( !this.forma.value.condiciones) {
      swal('Importante', 'Debes aceptar las condiciones', 'warning');
      return;
    }

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password,
    );

    this._userService.crearUsuario( usuario )
    .subscribe( resp => this.router.navigate(['/login']));

  }
}
