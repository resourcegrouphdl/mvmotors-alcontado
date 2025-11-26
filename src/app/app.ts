import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxSonnerToaster} from 'ngx-sonner';
import {Footer} from './shared/footer/footer';
import {Tablaclientes} from './shared/tablaclientes/tablaclientes';
import {Navbar} from './shared/navbar/navbar';
import {TopInformationBar} from './shared/top-information-bar/top-information-bar';
import {LogosInMove} from './shared/logos-in-move/logos-in-move';
import {Home} from './features/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSonnerToaster, Footer, Tablaclientes, Navbar, TopInformationBar, LogosInMove, Home],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected title = 'mvmotors-autos';
}
