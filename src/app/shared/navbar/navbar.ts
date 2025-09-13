import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import {Inavegacion, RUTASNAVBAR} from '../interfaces/navegacion';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone : true,
  imports: [RouterLink,RouterLinkActive,NgFor,NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  rutas: Inavegacion[] = RUTASNAVBAR;
  menuAbierto: boolean = false;

  trackByPath(index: number, ruta: any): string {
    return ruta.path;


  }
}
