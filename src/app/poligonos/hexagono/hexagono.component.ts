import { Component, OnInit } from '@angular/core';
import { Poligono } from 'src/app/interfaces/poligono.interface';
import {PoligonoService} from "../../poligono.service";

@Component({
  selector: 'app-hexagono',
  templateUrl: './hexagono.component.html',
  styles: [
  ]
})
export class HexagonoComponent implements OnInit{

  poligono: Poligono = {
    img: "hexagon.png",
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
    return lado*6;
  }
  calcArea(lado:number) : number {
    return (Math.sqrt(Math.pow(lado,2)-Math.pow(lado/2, 2)))*3*lado;
  }

}
