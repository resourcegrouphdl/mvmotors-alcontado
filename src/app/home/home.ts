import { Component } from '@angular/core';
import { Cliente} from '../clientes/cliente/cliente';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Cliente],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
