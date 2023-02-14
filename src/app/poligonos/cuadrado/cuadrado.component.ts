import { Component } from '@angular/core';
import {PoligonoService} from "../../poligono.service";

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styles: [
  ]
})
export class CuadradoComponent {
  perimetro :number;
  area :number;

  constructor(private poligonoService:PoligonoService) {
    this.perimetro=this.calcPerimetro(poligonoService.getLado());
    this.area=this.calcArea(poligonoService.getLado());
  }

  calcPerimetro(lado:number) : number {
    return lado*4;
  }
  calcArea(lado:number) : number {
    return (Math.pow(lado, 2));
  }
}
