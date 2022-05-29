import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  constructor(private clientesService: ClientesService) { 

  }

  ngOnInit(): void {
  }

  // agregarNuevoCliente(cliente:ICliente){
  //   //console.log('Se llamo el emmiter');

  //   //this.clientes.push(cliente);
  // }

}
