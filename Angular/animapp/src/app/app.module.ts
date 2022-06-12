import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompartidoModule } from './compartido/compartido.module';
import { AnimappModule } from './animapp/animapp.module';
/**Importación se deb hacer manual httpClient */
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompartidoModule,
    AnimappModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
