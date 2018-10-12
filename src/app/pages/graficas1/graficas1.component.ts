import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
    
  graficos: any = {
    'grafico1': {
      'labels': ['Piscinas', 'Senderos', 'Restaurantes'],
      'data':  [80, 30, 46],
      'type': 'doughnut',
      'leyenda': '¿Cuál es su mayor atractivo?'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Género'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Es asociado?'
    },
    'grafico4': {
      'labels': ['No', 'Si', 'Talvez'],
      'data':  [85, 15, 20],
      'type': 'doughnut',
      'leyenda': '¿Volvería a visitarnos?'
    },
  };


  constructor() { }

  ngOnInit() {
  }

}
