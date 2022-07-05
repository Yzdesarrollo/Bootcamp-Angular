import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { Ruta1Component } from './ruta1/ruta1.component';
import { Ruta2Component } from './ruta2/ruta2.component';
import { Ruta3Component } from './ruta3/ruta3.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { AppRouterModule } from '../app-router.module';



@NgModule({
  declarations: [
    HeaderComponent,
    Ruta1Component,
    Ruta2Component,
    Ruta3Component,
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRouterModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    Ruta1Component,
    Ruta2Component,
    Ruta3Component,
    ContenidoComponent
  ]
})
export class PaginaModule { }
