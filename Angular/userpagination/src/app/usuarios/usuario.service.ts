import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Datos, IUser } from './interfaces/IUsers';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl:string = environment.apiUrl;
  userUrl:string = `${this.baseUrl}/users`;
  resultados:Datos[] = [];
  totalRegistros:number = 0;
  registrosPorPagina:number = 0;

  constructor(private http: HttpClient) { }

  listarUsuarios(pagina:number = 0, size:number = 3){

    const params = new HttpParams()
    .set('page',pagina.toString())
    .set('per_page',size.toString());


    this.http.get<IUser>(this.userUrl, {params:params})
            .subscribe(resp =>{
              this.resultados = resp.data;
              this.totalRegistros = resp.total;
              this.registrosPorPagina = resp.per_page;
            });
  }
}
