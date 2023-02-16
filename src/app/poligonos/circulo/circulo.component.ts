import { Component, OnInit } from '@angular/core';
import { PoligonoService } from '../../poligono.service';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styles: [
  ]
})
export class CirculoComponent implements OnInit{

  perimetro : string = this.calcPerimetro();
  area:string = this.calcArea();

  constructor(private poligonoService:PoligonoService) {}

  ngOnInit(): void {
    
    this.poligonoService.calculo.subscribe( () => {
      this.perimetro = this.calcPerimetro();
      this.area = this.calcArea();
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
