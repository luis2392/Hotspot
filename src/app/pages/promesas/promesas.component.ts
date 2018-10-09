import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    // tslint:disable-next-line:prefer-const
    let promesa = new Promise ( (resolve, reject) => {
      let contador = 0;

      let Intervalo = setInterval( ( ) => {

        contador += 1;
        console.log( contador );

        if ( contador === 3) {
          resolve('Todo Bien');
          clearInterval(Intervalo);
        }

      }, 100 );


    });

    promesa.then(
    mensaje  => console.log('Termino!', mensaje),
    )
    .catch( error => console.error('Error en la promesa', error));

   }

  ngOnInit() {
  }

}
