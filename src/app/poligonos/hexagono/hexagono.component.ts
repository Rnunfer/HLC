import { Component } from '@angular/core';
import {PoligonoService} from "../../poligono.service";

@Component({
  selector: 'app-hexagono',
  templateUrl: './hexagono.component.html',
  styles: [
  ]
})
export class HexagonoComponent{

  perimetro :number;
  area :number;

  constructor(private poligonoService:PoligonoService) {
    this.perimetro=this.calcPerimetro(this.lado);
    this.area=this.calcArea(this.lado);
  }

  calcPerimetro(lado:number) : number {
    return lado*6;
  }
  calcArea(lado:number) : number {
    return (Math.sqrt(Math.pow(lado,2)-Math.pow(lado/2, 2)))*3*lado;
  }

  get lado() {
    return this.poligonoService.lado;
  }

}
