import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { IAuto } from './interfaces/auto';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private _autos: IAuto[] = [];

  // private _autos: IAuto[] = [
  //   {
  //     Marca:'Renault',
  //     Modelo: '2019',
  //     Precio: 3000
  //   },
  //   {
  //     Marca:'Hunday',
  //     Modelo: '2018',
  //     Precio: 7000
  //   },
  //   {
  //     Marca:'Toyota',
  //     Modelo: '2017',
  //     Precio: 5000
  //   },
  // ];

  get autos(): IAuto[]{
    return this._autos;
  }

  agregarAuto(auto: IAuto){
    this._autos.push(auto);
    localStorage.setItem("autos", JSON.stringify(this._autos));
  }

  constructor() { 
    this._autos = JSON.parse(localStorage.getItem("autos")!) || [];
  }
}
