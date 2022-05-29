import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-registrar-auto',
  templateUrl: './registrar-auto.component.html',
  styleUrls: ['./registrar-auto.component.css']
})
export class RegistrarAutoComponent implements OnInit {


@Output()
onNuevoAuto: EventEmitter<IAuto> = new EventEmitter();

nuevo:IAuto = {
  Marca:'',
  Modelo:'',
  Precio:0
}

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

  //this.autos.push(this.nuevo)
  this.onNuevoAuto.emit(this.nuevo);
  this.nuevo = {
    Marca : '',
    Modelo : '',
    Precio : 0
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
