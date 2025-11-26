import {Component, inject, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusService} from '../status/services/status.service';
import {MotocicletaInicio} from './models';
import {Observable , of} from 'rxjs';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-slider-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './slider-card.html',
  styleUrl: './slider-card.css',
})
export class SliderCard implements OnInit {

  private svc = inject(StatusService);
  ngOnInit() {
    this.svc.getStatus().subscribe(status => {
      console.log('STATUS COMPLETO:', status);
      console.log('NOMBRES:', status.nombres);
      console.log('TOTAL:', status.total);
    });
  }

  @Input() statusss$!: Observable<{ nombres: MotocicletaInicio[]; total: number }>;

  fallbackImage = 'assets/images/fallback-moto.png';

  filtroMarca = '';
  filtroPrecioMax?: number;

  trackById(index: number, item: MotocicletaInicio) {
    return item.id;
  }

  verDetalle(moto: MotocicletaInicio) {
    // lógica para ver detalle (router.navigate o emitir evento)
    console.log('ver', moto);
  }

  filtrarMotos(motos: MotocicletaInicio[]): MotocicletaInicio[] {
    return motos.filter(m => {
      const pasaMarca =
        !this.filtroMarca || m.marca?.toLowerCase().includes(this.filtroMarca.toLowerCase());

      const pasaPrecio =
        !this.filtroPrecioMax || Number(m.precio) <= this.filtroPrecioMax;

      return pasaMarca && pasaPrecio;
    });
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
