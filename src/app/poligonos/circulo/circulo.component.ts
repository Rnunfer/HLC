import { Component, OnInit } from '@angular/core';
import { PoligonoService } from '../../poligono.service';
import { Poligono } from '../../interfaces/poligono.interface';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styles: [
  ]
})
export class CirculoComponent implements OnInit{

  poligono: Poligono = {
    img: "circle.png",
    perimetro: this.calcPerimetro(this.poligonoService.lado),
    area: this.calcArea(this.poligonoService.lado)
  }

  constructor(private poligonoService:PoligonoService) {}

  ngOnInit(): void {

    this.poligonoService.calculo.subscribe( () => {
      this.poligono.perimetro = this.calcPerimetro(this.poligonoService.lado);
      this.poligono.area = this.calcArea(this.poligonoService.lado);
    })
  }

  calcPerimetro(lado:number) : number{
    return Math.PI*lado
  }

  calcArea(lado:number) : number{
    return Math.PI*Math.pow(lado,2);
  }

}
