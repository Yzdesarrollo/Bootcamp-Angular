import { Component, Input, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

//@Input()
//clientes: ICliente[] = [];

  constructor(private clienteService: ClientesService) { 

  }

  get clientes(): ICliente[]{
    return this.clienteService.clientes;
  }

  ngOnInit(): void {
  }

}
