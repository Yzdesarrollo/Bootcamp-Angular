import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-principal-autos',
  templateUrl: './principal-autos.component.html',
  styleUrls: ['./principal-autos.component.css']
})
export class PrincipalAutosComponent implements OnInit {

  constructor(autosServices: AutosService) { }

  ngOnInit(): void {
  }



  agregarNuevoAuto(auto: IAuto){
    console.log('Se llama el emiter');
    //this.autos.push(auto);
  }
 

}
