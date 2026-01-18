import {Component, inject,  OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusService} from '../status/services/status.service';
import {Observable , of} from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {motoUnited} from '../../core/models/backend-status.model';
import {PageResponse} from '../../data/api/backend.api';


@Component({
  selector: 'app-slider-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './slider-card.html',
  styleUrl: './slider-card.css',
})
export class SliderCard implements OnInit {

  requestBackend!: Observable<PageResponse<motoUnited>>;


  private svc = inject(StatusService);
  private router = inject(Router);
  ngOnInit() {
    this.requestBackend = this.svc.getStatus();
  }



  filtroMarca = '';
  filtroPrecioMax?: number;


  trackById(index: number, item: motoUnited) {
    return item.id;
  }

  verDetalle(moto: motoUnited) {
    this.router.navigate(['/detalle', moto.id],{state: { moto }});

  }

  filtrarMotos(motos: motoUnited[]): motoUnited[] {
    return motos.filter(m => {
      const pasaMarca =
        !this.filtroMarca || m.idmoto?.toLowerCase().includes(this.filtroMarca.toLowerCase());

      const pasaPrecio =
        !this.filtroPrecioMax || Number(m.precio) <= this.filtroPrecioMax;

      return pasaMarca && pasaPrecio;
    });
  }


}
