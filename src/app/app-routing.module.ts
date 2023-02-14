import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CirculoComponent } from './poligonos/circulo/circulo.component';
import { CuadradoComponent } from './poligonos/cuadrado/cuadrado.component';
import { HexagonoComponent } from './poligonos/hexagono/hexagono.component';
import { PentagonoComponent } from './poligonos/pentagono/pentagono.component';
import { RectanguloComponent } from './poligonos/rectangulo/rectangulo.component';
import { TrianguloComponent } from './poligonos/triangulo/triangulo.component';

const routes: Routes = [
  {
      path:'',
      component: CirculoComponent,
      pathMatch: 'full'
  },
  {
      path:'cuadrado',
      component: CuadradoComponent
  },
  {
        path: 'triangulo',
        component: TrianguloComponent
  },
  {
      path:'rectangulo',
      component: RectanguloComponent
  },
  {
      path:'pentagono',
      component: PentagonoComponent
  },
  {
      path:'hexagono',
      component: HexagonoComponent
  },
  {
      path:'**',
      redirectTo:''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
