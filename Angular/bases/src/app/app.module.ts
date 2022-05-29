import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { EmpleadosModule } from './Empleados/empleados.module';
import { ClientesModule } from './clientes/clientes.module';

/**
 * Siempre en el módulo principal en los
 * - Imports se agregan los módulos creados
 */

@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent
  ],
  imports: [
    BrowserModule,
    EmpleadosModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
