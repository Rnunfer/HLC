import { Component } from '@angular/core';
import { PoligonoService } from '../../poligono.service';
import {Poligono} from "../../interfaces/poligono.interface";

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styles: [
  ]
})
export class TrianguloComponent {

  poligono: Poligono = {
    img: "triangle.png",
    perimetro: this.calcPerimetro(this.poligonoService.lado),
    area: this.calcArea(this.poligonoService.lado)
  }

  constructor(private poligonoService:PoligonoService){

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

  ngOnInit() {
    this.poligonoService.calculo.subscribe( () => {
      this.poligono.perimetro = this.calcPerimetro(this.poligonoService.lado);
      this.poligono.area = this.calcArea(this.poligonoService.lado);
    })
  }
}
