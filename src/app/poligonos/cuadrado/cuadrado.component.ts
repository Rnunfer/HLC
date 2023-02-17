import {Component, OnInit} from '@angular/core';
import {PoligonoService} from "../../poligono.service";

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styles: [
  ]
})
export class CuadradoComponent implements OnInit {
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
    return lado*4;
  }
  calcArea(lado:number) : number {
    return (Math.pow(lado, 2));
  }

  get lado() {
    return this.poligonoService.lado;
  }
}
