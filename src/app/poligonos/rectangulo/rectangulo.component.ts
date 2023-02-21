import { Component } from '@angular/core';
import {PoligonoService} from "../../poligono.service";
import {Poligono} from "../../interfaces/poligono.interface";

@Component({
  selector: 'app-rectangulo',
  templateUrl: './rectangulo.component.html',
  styles: [
  ]
})
export class RectanguloComponent {



  poligono: Poligono = {
    img: "rectangle.png",
    perimetro: this.calcPerimetro(this.poligonoService.lado),
    area: this.calcArea(this.poligonoService.lado)
  }

  constructor(private poligonoService:PoligonoService){

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
  ngOnInit() {
    this.poligonoService.calculo.subscribe( () => {
      this.poligono.perimetro = this.calcPerimetro(this.poligonoService.lado);
      this.poligono.area = this.calcArea(this.poligonoService.lado);
    })
  }


}
