import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datos, IAnimapp } from './interfaces/animapp';

@Injectable({
  providedIn: 'root'
})
export class AnimappService {

  API_URL: string = 'https://api.giphy.com/v1/gifs/search'
  API_KEY:string = '0sJzPy3Co38jRBXTXGxN7tkFLDAR6Oz4';
  resultados: Datos[] = [];

  constructor(private http:HttpClient) { 
    
  }

  buscar(query:string){
    this.http.get<IAnimapp>(`${this.API_URL}?api_key=${this.API_KEY}&q=${query}&limit=10`)
             .subscribe(resp =>{
               //console.log(resp.data);
               this.resultados = resp.data;
             });   
  }
}
