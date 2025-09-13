import { Component } from '@angular/core';
import {Slider} from '../../shared/slider/slider';
import {SliderCard} from '../slider-card/slider-card';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [Slider, SliderCard],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
