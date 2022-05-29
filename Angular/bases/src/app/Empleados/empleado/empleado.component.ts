import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

tituloAntiguo: string = "Empleados Antiguos";
tituloNuevo: string = "Empleados Nuevos";

  empleadosAntiguos: IEmpleado[] = [
    {
      nombres: 'carlos andres',
      apellidos: 'piedra',
      direccion: 'cra izquierda',
      sueldo: 5000
    },
    {
      nombres: 'daniel camilo',
      apellidos: 'benavidez',
      direccion: 'cra derecha',
      sueldo: 8000
    },
    {
      nombres: 'andrea',
      apellidos: 'cardona',
      direccion: 'cra zurda',
      sueldo: 4000
    }
  ];

  empleadosNuevos: IEmpleado[] = [
    {
      nombres: 'Yeison',
      apellidos: 'Zaraza',
      direccion: 'cra izquierda',
      sueldo: 5000
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
