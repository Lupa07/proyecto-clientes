import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componenetes/cabecera/cabecera.component';
import { FiltrosComponent } from './componenetes/filtros/filtros.component';
import { MostrarDatosComponent } from './componenetes/mostrar-datos/mostrar-datos.component';
import { DatosService } from './services/datos.service';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FiltrosComponent,
    MostrarDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
