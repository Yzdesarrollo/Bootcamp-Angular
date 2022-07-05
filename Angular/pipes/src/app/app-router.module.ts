import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './principal/basicos/basicos.component';
import { NumerosComponent } from './principal/numeros/numeros.component';
import { OtrosComponent } from './principal/otros/otros.component';

const routes: Routes = [
  {
    path: '', component: BasicosComponent, pathMatch: 'full' // Ruta principal
  },
  {
    path: 'numeros', component: NumerosComponent // Ruta numeros
  },
  {
    path: 'otros', component: OtrosComponent // Ruta otros
  },
  {
    path: '*', redirectTo: '' // Redireccionar principal
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
