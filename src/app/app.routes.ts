import { Routes } from '@angular/router';
import {NotFound} from './shared/not-found/not-found';
import {LibroDeReclamaciones} from './shared/libro-de-reclamaciones/libro-de-reclamaciones';
import {PoliticasDePrivacidad} from './shared/politicas-de-privacidad/politicas-de-privacidad';
import {TerminosCondiciones} from './shared/terminos-condiciones/terminos-condiciones';
import {Inicio} from './inicio/inicio/inicio';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Inicio,
  },
  {
    path: 'terminos-y-condiciones',
    component: TerminosCondiciones,
  },
  {
    path: 'libro-de-reclamaciones',
    component: LibroDeReclamaciones,
  },
  {
    path: 'politicas-de-privacidad',
    component: PoliticasDePrivacidad,
  },
  {
    path: '**',
    redirectTo: 'home',
  },

];
