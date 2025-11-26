import { Component } from '@angular/core';

import {Footer} from '../../shared/footer/footer';
import {LogosInMove} from '../../shared/logos-in-move/logos-in-move';
import {Navbar} from '../../shared/navbar/navbar';
import {NgxSonnerToaster} from 'ngx-sonner';
import {RouterOutlet} from '@angular/router';
import {TopInformationBar} from '../../shared/top-information-bar/top-information-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ Footer, LogosInMove, Navbar, NgxSonnerToaster, RouterOutlet, TopInformationBar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
