import { Component } from '@angular/core';
import { PoligonoService } from '../../poligono.service';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styles: [
  ]
})
export class CirculoComponent {
  perimetro : number;
  area:number;

  constructor(private poligonoService:PoligonoService){
    this.perimetro= this.calcPerimetro(poligonoService.getLado());
    this.area= this.calcArea(poligonoService.getLado());
  }

  calcPerimetro(lado:number) : number{
    return Math.PI*lado;
  }


  calcArea(lado:number) : number{
    return Math.PI*Math.pow(lado,2);
  }
}
