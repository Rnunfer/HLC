import { Component } from '@angular/core';
import {PoligonoService} from "../../poligono.service";

@Component({
  selector: 'app-rectangulo',
  templateUrl: './rectangulo.component.html',
  styles: [
  ]
})
export class RectanguloComponent {
  perimetro : number;
  area:number;


  constructor(private poligonoService:PoligonoService){
    this.perimetro= this.calcPerimetro(this.lado);
    this.area= this.calcArea(this.lado);

  }

  calcPerimetro(lado:number) : number{
    return 2*lado+2*Math.pow(lado, 2);
  }


  calcArea(lado:number) : number{
    return lado*Math.pow(lado, 2);
  }

  get lado() {
    return this.poligonoService.lado;
  }
}
