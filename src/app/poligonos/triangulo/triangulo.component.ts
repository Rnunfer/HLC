import { Component } from '@angular/core';
import { PoligonoService } from '../../poligono.service';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styles: [
  ]
})
export class TrianguloComponent {
  perimetro : number;
  area:number;

  constructor(private poligonoService:PoligonoService){
    this.perimetro= this.calcPerimetro(this.lado);
    this.area= this.calcArea(this.lado);
  }

  calcPerimetro(lado:number) : number{
    return lado*3;
  }


  calcArea(lado:number) : number{
    return Math.sqrt(3/4)*Math.pow(lado, 2);
  }

  get lado() {
    return this.poligonoService.lado;
  }
}
