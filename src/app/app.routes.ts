import { Routes } from '@angular/router';
import {NotFound} from './shared/not-found/not-found';
import {LibroDeReclamaciones} from './shared/libro-de-reclamaciones/libro-de-reclamaciones';
import {PoliticasDePrivacidad} from './shared/politicas-de-privacidad/politicas-de-privacidad';
import {TerminosCondiciones} from './shared/terminos-condiciones/terminos-condiciones';
import {Inicio} from './features/inicio/inicio';
import {DetalleMoto} from './features/detalle-moto/detalle-moto';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'detalle/:id', component: DetalleMoto },
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
