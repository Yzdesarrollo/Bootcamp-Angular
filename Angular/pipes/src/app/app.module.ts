import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CompartidoModule } from './compartido/compartido.module';
import { PrincipalModule } from './principal/principal.module';
import { AppRouterModule } from './app-router.module';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CO';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CompartidoModule,
    PrincipalModule,
    AppRouterModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
