import { Component, Input, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  @Input()
  autos:IAuto[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
