import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  // Envío de variables, se puede renombar las variables para que desde afuera se puedan manipular con otro nombre, tipo alias
   @ViewChild ('txtProgress') txtProgress: ElementRef;

  // tslint:disable-next-line:no-input-rename
  @Input('nombre') leyenda: string = '¿Cuál es su nivel de satisfacción?';
  @Input() progreso: number = 50;
  // Para car valor
  // tslint:disable-next-line:no-output-rename
  @Output('actualizarValor') cambioValor: EventEmitter<Number> = new EventEmitter();


  onChanges ( newValue: number) {
   
    // tslint:disable-next-line:prefer-const
    // let elemHTML: any = document.getElementsByName('progreso')[0];


    if ( newValue >= 100) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    // elemHTML.value =   this.progreso ;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );

  }

  cambiarValor( valor: number ) {
    if ( this.progreso >= 100 && valor > 0) {
    this.progreso = 100;
    return 0;
    }

    if ( this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return 0;
    }
    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();

  }

  constructor() {
   }

  ngOnInit() {
  }

}
