import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AutosService } from '../autos.service';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-registrar-auto',
  templateUrl: './registrar-auto.component.html',
  styleUrls: ['./registrar-auto.component.css']
})
export class RegistrarAutoComponent implements OnInit {

  constructor(private autosServices: AutosService) { }

  ngOnInit(): void {
  }


nuevo:IAuto = {
  Marca:'',
  Modelo:'',
  Precio:0
}

registrar(){

  if(this.nuevo.Marca.trim().length === 0)
    return;
  if(this.nuevo.Modelo.trim().length === 0)
    return;
  if(this.nuevo.Precio === null)
    return;


  this.autosServices.agregarAuto(this.nuevo);

  this.nuevo = {
    Marca : '',
    Modelo : '',
    Precio : 0
  }
}

 

}
