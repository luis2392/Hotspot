import { Component, OnInit } from '@angular/core';


declare function init_plugins();

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {

  constructor(  ) {}

  ngOnInit() {
    init_plugins();
  }

}
