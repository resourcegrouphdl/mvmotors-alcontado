import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatusService} from '../../features/status/services/status.service';



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

  constructor() {
    this.status$.subscribe(d => console.log('COMPONENTE 🔵:', d));
  }

}
