import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoligonoService {

   @Output() calculo = new EventEmitter<number>();

  private _lado: number = 0;

  constructor() { }

  get lado() {
    return this._lado;
  }

  setLado(lado: number) {
    this._lado = lado;
    console.log(this.lado);
  }

  calcular() {
    this.calculo.emit();
  }

}
