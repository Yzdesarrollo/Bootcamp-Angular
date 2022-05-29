import { Component, Input, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  constructor(private autosServices: AutosService) { }

  ngOnInit(): void {
  }

  get autos(): IAuto[]{
    return this.autosServices.autos;
  }

}
