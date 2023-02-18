import {Component, OnInit} from '@angular/core';
import { Poligono } from 'src/app/interfaces/poligono.interface';
import {PoligonoService} from "../../poligono.service";

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styles: [
  ]
})
export class CuadradoComponent implements OnInit {
  
  poligono: Poligono = {
    img: "square.png",
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
    return lado*4;
  }
  calcArea(lado:number) : number {
    return (Math.pow(lado, 2));
  }
  
}
