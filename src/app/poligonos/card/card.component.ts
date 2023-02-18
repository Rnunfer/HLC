import { Component, Input } from '@angular/core';
import { Poligono } from '../../interfaces/poligono.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent {

  @Input() poligono!: Poligono;

  constructor() {};

}
