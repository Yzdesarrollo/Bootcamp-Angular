import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAutosComponent } from './listar-autos/listar-autos.component';
import { FormsModule } from '@angular/forms';
import { PrincipalAutosComponent } from './principal-autos/principal-autos.component';
import { RegistrarAutoComponent } from './registrar-auto/registrar-auto.component';



@NgModule({
  declarations: [
    ListarAutosComponent,
    PrincipalAutosComponent,
    RegistrarAutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListarAutosComponent,
    PrincipalAutosComponent,
    RegistrarAutoComponent

  ]
})
export class AutosModule { }
