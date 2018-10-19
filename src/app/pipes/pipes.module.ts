import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';



@NgModule({
  imports: [],
  declarations: [
    ImagenPipe
  ],

  exports: [ // Nos Indica cuáles se ocuparan fuera de este mismo módulo
    ImagenPipe
  ]

})
export class PipesModule { }
