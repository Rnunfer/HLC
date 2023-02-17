import { Component, OnInit } from '@angular/core';
import {PoligonoService} from "../../poligono.service";

@Component({
  selector: 'app-pentagono',
  templateUrl: './pentagono.component.html',
  styles: [
  ]
})
export class PentagonoComponent implements OnInit{
  perimetro !:number;
  area !:number;

  constructor(private poligonoService:PoligonoService) {
    this.perimetro = this.calcPerimetro(this.poligonoService.lado);
    this.area = this.calcArea(this.poligonoService.lado);
  }
  ngOnInit() {
    this.poligonoService.calculo.subscribe( () => {
      this.perimetro = this.calcPerimetro(this.poligonoService.lado);
      this.area = this.calcArea(this.poligonoService.lado);
    })
  }

  calcPerimetro(lado:number) : number {
    return lado*5;
  }
  calcArea(lado:number) : number {
    return (lado/(Math.tan(36*Math.PI/180)))*lado*2.5/2;
  }

  get lado() {
    return this.poligonoService.lado;
  }
}
