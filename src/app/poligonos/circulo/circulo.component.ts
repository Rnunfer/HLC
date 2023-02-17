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
    perimetro: this.calcPerimetro(),
    area: this.calcArea()
  }

  constructor(private poligonoService:PoligonoService) {}

  ngOnInit(): void {

    this.poligonoService.calculo.subscribe( () => {
      this.poligono.perimetro = this.calcPerimetro();
      this.poligono.area = this.calcArea();
    })
  }

  calcPerimetro() : string{
    return (Math.PI*this.lado).toFixed(2);
  }

  calcArea() : string{
    return (Math.PI*Math.pow(this.lado,2)).toFixed(2);
  }

  get lado() {
    return this.poligonoService.lado;
  }

}
