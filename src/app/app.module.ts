import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoligonosModule } from './poligonos/poligonos.module';
import { PoligonoService } from './poligono.service';
import { AsideComponent } from './shared/aside/aside.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoligonosModule,
    FormsModule
  ],
  providers: [PoligonoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
