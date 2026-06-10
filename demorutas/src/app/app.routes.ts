import { Routes } from '@angular/router';
import { Detalle1 } from './detalle1/detalle1';
import { Detalle2 } from './detalle2/detalle2';
import { Externo } from './externo/externo';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [

    {
    path: 'detalle1',
    component: Detalle1,
    title: 'Detalle 1',
    },
     {
  path: 'detalle2/:miparam',
    component: Detalle2,
    title: 'Detalle 2',
    },
     {
  path: 'externo/:miparam',
    component: Externo,
    title: 'externo jejejejjejejejjej',
    },
 {
    path: '**',
    component: NoEncontrado,
    title: 'Pagina no encontrada',
    }



];

