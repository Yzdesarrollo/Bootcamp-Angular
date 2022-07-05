import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent implements OnInit {

  nombre : string = 'carlos';
  genero : string = 'masculino';

  bienvenidoMapa = {
    'masculino': 'Bienvenido',
    'femenino': 'Bienvenida'
  }

  usuarios : string[] = ['Carlos', 'Roberto', 'Marcela'];

  usuariosMapa = {
    '=0': 'No hay usuarios en línea',
    '=1': 'Tenemos un usuario en línea',
    '=2': 'Tenemos 2 usuarios en línea',
    'other': 'Tenemos # usuarios en línea',

  }

  constructor() { }

  ngOnInit(): void {
  }

}
