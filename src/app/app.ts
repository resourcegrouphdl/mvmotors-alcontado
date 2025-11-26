import { Component } from '@angular/core';
import {Home} from './features/home/home';

@Component({
  selector: 'app-root',
  imports: [ Home],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected title = 'mvmotors-autos';
}
