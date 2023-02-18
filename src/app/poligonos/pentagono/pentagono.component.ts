import { Component, OnInit } from '@angular/core';
import { Poligono } from 'src/app/interfaces/poligono.interface';
import {PoligonoService} from "../../poligono.service";

@Component({
  selector: 'app-pentagono',
  templateUrl: './pentagono.component.html',
  styles: [
  ]
})
export class PentagonoComponent implements OnInit{
  
  poligono: Poligono = {
    img: "pentagon.png",
    perimetro: this.calcPerimetro(this.poligonoService.lado),
    area: this.calcArea(this.poligonoService.lado)
  }

  constructor(private poligonoService:PoligonoService) {}

  ngOnInit() {
    this.poligonoService.calculo.subscribe( () => {
      this.poligono.perimetro = this.calcPerimetro(this.poligonoService.lado);
      this.poligono.area = this.calcArea(this.poligonoService.lado);
    })
  }

  calcPerimetro(lado:number) : number {
    return lado*5;
  }
  calcArea(lado:number) : number {
    return (lado/(Math.tan(36*Math.PI/180)))*lado*2.5/2;
  }

}
