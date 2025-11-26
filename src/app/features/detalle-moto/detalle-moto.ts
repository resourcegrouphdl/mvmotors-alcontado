import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import {MotocicletaProduct} from '../../core/models/Imotocicleta';


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
  moto: MotocicletaProduct | undefined // aquí guardaremos la moto encontrada

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log('ID recibido:', this.id);

    this.buscarMoto();
  }

  buscarMoto() {
    // SIMULACIÓN (luego esto vendrá de tu API)
    const motos: MotocicletaProduct[] = [
      {
        id: '1',
        marca: 'Yamaha',
        modelo: 'R1',
        categoria: 'Deportiva',
        descripcion: 'Superbike de alto rendimiento.',
        imagen_principal: 'mtoo.jpg',
        imagenes: ['mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg', 'mtoo.jpg'],
        precio: '15000',
        stock: '4',
        fichaTecnica: {} as any
      }
    ];

    this.moto = motos.find(m => m.id === this.id);
    console.log("moto", this.moto)
  }

  getWhatsappLink(): string {
    const telefono = '5199999';
    const mensaje = `Hola, estoy interesado en la moto`;
    return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  }


}
