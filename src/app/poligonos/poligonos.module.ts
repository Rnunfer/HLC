import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirculoComponent } from './circulo/circulo.component';
import { CuadradoComponent } from './cuadrado/cuadrado.component';
import { HexagonoComponent } from './hexagono/hexagono.component';
import { PentagonoComponent } from './pentagono/pentagono.component';
import { RectanguloComponent } from './rectangulo/rectangulo.component';
import { TrianguloComponent } from './triangulo/triangulo.component';



@NgModule({
  declarations: [
    CirculoComponent,
    CuadradoComponent,
    HexagonoComponent,
    PentagonoComponent,
    RectanguloComponent,
    TrianguloComponent
  ],
  exports: [
    CirculoComponent,
    CuadradoComponent,
    HexagonoComponent,
    PentagonoComponent,
    RectanguloComponent,
    TrianguloComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PoligonosModule { }
