import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';

declare function init_plugins();
declare const gapi: any; // Utilizada para validar usuario de gmail


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string; // nos ayudará para mostrar el correo cuando hemos elegido el recuérdame
  recuerdame: boolean = false;

  auth2: any; // SingIn con google

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
    ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';  // Muestra los datos del correo, en caso haya activado recuerda, sino envia vacio
    if ( this.email.length > 1 ) { // Para activar el check de recuerdáme
      this.recuerdame = true;
    }
  }

  // Inicialización de Plugin de Google para poder sesionarme
  googleInit() {

    gapi.load('auth2', () => {

      this.auth2 = gapi.auth2.init({
        client_id: '299346961917-05prla1b4jfannqhbd0r12r8hamht70g.apps.googleusercontent.com' ,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin( document.getElementById('btnGoogle'));

    });

  }

   attachSignin( element ) { // Adjunta la información de Google

    this.auth2.attachClickHandler( element, {}, (googleUser) => {

      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle( token )
              .subscribe( () => window.location.href = '#/dashboard'  );

    });

  }

  ingresar( forma: NgForm) {

    if ( forma.invalid ) {
      return;
    }

    let usuario = new Usuario (null, forma.value.email, forma.value.password );

    this._usuarioService.login( usuario, forma.value.recuerdame )
                  .subscribe ( correcto =>  this.router.navigate(['/dashboard']) );

    console.log( forma.valid );
    console.log( forma.value);

    // this.router.navigate([ '/dashboard']);
  }

}
