import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoligonosModule } from './poligonos/poligonos.module';
import { PoligonoService } from './poligono.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoligonosModule
  ],
  providers: [PoligonoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
