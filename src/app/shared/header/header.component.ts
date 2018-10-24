import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from 'src/app/models/usuario.models';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: Usuario; // Para referenciarlo más facilmente y omitir el nombre largo del servicio


  constructor( public _usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario; // Carga cuando se inicia el componente
  }

}
