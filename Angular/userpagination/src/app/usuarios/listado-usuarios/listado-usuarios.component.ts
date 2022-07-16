import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  displayedColumns:string[] = ['id','avatar','first_name','last_name','email'];
  constructor(private usuarioServices:UsuarioService) { }

  ngOnInit(): void {
    return this.usuarioServices.listarUsuarios();
  }

  get resultados(){
    return this.usuarioServices.resultados;
  }

  get totalRegistros(){
    return this.usuarioServices.totalRegistros;
  }

  get registrosPorPagina(){
    return this.usuarioServices.registrosPorPagina;
  }

  onChangePaginator(event:PageEvent){
    let pagina = event.pageIndex;
    let tamaño = event.pageSize;
    pagina++;
    this.usuarioServices.listarUsuarios(pagina, tamaño);
  }
}
