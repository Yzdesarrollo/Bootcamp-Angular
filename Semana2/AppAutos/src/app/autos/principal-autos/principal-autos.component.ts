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

  nuevo:IAuto = {
    Marca:'',
    Modelo:'',
    Precio:0
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

  registrar(){
    // e: any
    //e.preventDefault();
    //console.log(this.nuevo);
    if(this.nuevo.Marca.trim().length === 0)
      return;
    if(this.nuevo.Modelo.trim().length === 0)
      return;
    if(this.nuevo.Precio === null)
      return;

    this.autos.push(this.nuevo)

    this.nuevo = {
      Marca : '',
      Modelo : '',
      Precio : 0
    }
  }

}
