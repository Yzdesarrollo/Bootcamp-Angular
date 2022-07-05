import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pagina/header/header.component';
import { Ruta1Component } from './pagina/ruta1/ruta1.component';
import { Ruta2Component } from './pagina/ruta2/ruta2.component';
import { Ruta3Component } from './pagina/ruta3/ruta3.component';
import { AppComponent } from './app.component';

const rutas : Routes = [
  {
    path: '', component: AppComponent, pathMatch: 'full'
  },
  {
    path: 'card', component: Ruta1Component
  },
  {
    path: 'buttons', component: Ruta2Component
  },
  {
    path: 'progressbar', component: Ruta3Component
  },
  {
    path: '*', redirectTo: '' // Redireccionar principal
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
