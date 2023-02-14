import { Component } from '@angular/core';
import {PoligonoService} from "../../poligono.service";

@Component({
  selector: 'app-pentagono',
  templateUrl: './pentagono.component.html',
  styles: [
  ]
})
export class PentagonoComponent {
  perimetro :number;
  area :number;

  constructor(private poligonoService:PoligonoService) {
    this.perimetro=this.calcPerimetro(poligonoService.getLado());
    this.area=this.calcArea(poligonoService.getLado());
  }

  calcPerimetro(lado:number) : number {
    return lado*5;
  }
  calcArea(lado:number) : number {
    return (lado/(Math.tan(36)*2))*lado*2.5;
  }
}
