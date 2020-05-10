import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';

import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { MapaEditarAltComponent } from './components/mapa/mapa-editar-alt.component';


// Se han importado ambos modulos por que se hace uso de dos maneras distintas de los formularios
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent,
    MapaEditarAltComponent
  ],
  entryComponents: [MapaEditarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAR2bZQ4USJoufFkMyXbATGIO3G9w2PVQ4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
