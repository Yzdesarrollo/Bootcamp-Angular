import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-principal-autos',
  templateUrl: './principal-autos.component.html',
  styleUrls: ['./principal-autos.component.css']
})
export class PrincipalAutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  autos:IAuto[] = [
    {
      Marca:'Renault',
      Modelo: '2019',
      Precio: 3000
    },
    {
      Marca:'Hunday',
      Modelo: '2018',
      Precio: 7000
    },
    {
      Marca:'Toyota',
      Modelo: '2017',
      Precio: 5000
    },
  ]

  agregarNuevoAuto(auto: IAuto){
    console.log('Se llama el emiter');
    this.autos.push(auto);
  }
 

}
