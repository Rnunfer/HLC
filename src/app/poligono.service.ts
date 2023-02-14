import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoligonoService {

  constructor() { }

  getLado(n:number) {
    console.log(n)
  }
}
