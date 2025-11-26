import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusService} from '../status/services/status.service';
import {MotocicletaInicio} from './models';
import {Observable , of} from 'rxjs';




@Component({
  selector: 'app-slider-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-card.html',
  styleUrl: './slider-card.css',
})
export class SliderCard {

  private svc = inject(StatusService);
  status$ = this.svc.getStatus();

  @Input() statusss$!: Observable<{ nombres: MotocicletaInicio[]; total: number }>;

  fallbackImage = 'assets/images/fallback-moto.png';

  trackById(index: number, item: MotocicletaInicio) {
    return item.id;
  }

  verDetalle(moto: MotocicletaInicio) {
    // lógica para ver detalle (router.navigate o emitir evento)
    console.log('ver', moto);
  }

  comprar(moto: MotocicletaInicio) {
    // lógica para comprar / agregar al carrito
    console.log('comprar', moto);
  }

  constructor() {
    this.statusss$ = of({
      total: 12,
      nombres: [
        {
          id: '1',
          marca: 'Honda',
          modelo: 'XR150',
          categoria: 'Dual Sport',
          imagen_principal: 'https://picsum.photos/400?10',
          precio: '7500',
          stock: '12'
        },
        {
          id: '2',
          marca: 'Yamaha',
          modelo: 'R15',
          categoria: 'Sport',
          imagen_principal: 'https://picsum.photos/400?11',
          precio: '15500',
          stock: '3'
        },
        {
          id: '3',
          marca: 'Bajaj',
          modelo: 'NS200',
          categoria: 'Street',
          imagen_principal: 'https://picsum.photos/400?12',
          precio: '9500',
          stock: '5'
        },
        {
          id: '1',
          marca: 'Honda',
          modelo: 'XR150',
          categoria: 'Dual Sport',
          imagen_principal: 'https://picsum.photos/400?10',
          precio: '7500',
          stock: '12'
        },
        {
          id: '2',
          marca: 'Yamaha',
          modelo: 'R15',
          categoria: 'Sport',
          imagen_principal: 'https://picsum.photos/400?11',
          precio: '15500',
          stock: '3'
        },
        {
          id: '3',
          marca: 'Bajaj',
          modelo: 'NS200',
          categoria: 'Street',
          imagen_principal: 'https://picsum.photos/400?12',
          precio: '9500',
          stock: '5'
        },{
          id: '1',
          marca: 'Honda',
          modelo: 'XR150',
          categoria: 'Dual Sport',
          imagen_principal: 'https://picsum.photos/400?10',
          precio: '7500',
          stock: '12'
        },
        {
          id: '2',
          marca: 'Yamaha',
          modelo: 'R15',
          categoria: 'Sport',
          imagen_principal: 'https://picsum.photos/400?11',
          precio: '15500',
          stock: '3'
        },
        {
          id: '3',
          marca: 'Bajaj',
          modelo: 'NS200',
          categoria: 'Street',
          imagen_principal: 'https://picsum.photos/400?12',
          precio: '9500',
          stock: '5'
        },{
          id: '1',
          marca: 'Honda',
          modelo: 'XR150',
          categoria: 'Dual Sport',
          imagen_principal: 'https://picsum.photos/400?10',
          precio: '7500',
          stock: '12'
        },
        {
          id: '2',
          marca: 'Yamaha',
          modelo: 'R15',
          categoria: 'Sport',
          imagen_principal: 'https://picsum.photos/400?11',
          precio: '15500',
          stock: '3'
        },
        {
          id: '3',
          marca: 'Bajaj',
          modelo: 'NS200',
          categoria: 'Street',
          imagen_principal: 'https://picsum.photos/400?12',
          precio: '9500',
          stock: '5'
        }
      ]
    });
  }

}
