import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import {MotocicletaProduct} from '../../core/models/Imotocicleta';
import { motoUnited } from '../../core/models/backend-status.model';

@Component({
  selector: 'app-detalle-moto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-moto.html',
  styleUrl: './detalle-moto.css'
})
export class DetalleMoto implements OnInit {
  id!: string;
  // @ts-ignore
  moto!: motoUnited;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    if (history.state?.moto) {
      this.moto = history.state.moto as motoUnited;
    } else {
      console.warn('Moto no recibida por state');
    }

    console.log(this.moto);



  }



  getWhatsappLink(): string {
    const telefono = '5199999';
    const mensaje = `Hola, estoy interesado en la moto`;
    return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  }


}
