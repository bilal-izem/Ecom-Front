import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HommeComponent } from './homme/homme.component';
import { EnfantComponent } from './enfant/enfant.component';
import { UniverComponent } from './univer/univer.component';
import { FemmeComponent } from './femme/femme.component';
import { FavorisComponent } from './favoris/favoris.component';


export const routes: Routes = [
  {path: 'acceuil',pathMatch: 'full', loadComponent: () => import('./acceuil/acceuil.component').then(mod => mod.AcceuilComponent)},
  {path: '',   redirectTo: '/acceuil', pathMatch: 'full' },
  {path: 'homme', loadComponent: () => import('./homme/homme.component').then(mod => mod.HommeComponent)},
  {path: 'femme', loadComponent: () => import('./femme/femme.component').then(mod => mod.FemmeComponent)},
  {path: 'enfant', loadComponent: () => import('./enfant/enfant.component').then(mod => mod.EnfantComponent)},
  {path: 'univer', loadComponent: () => import('./univer/univer.component').then(mod => mod.UniverComponent)},
  {path: 'compte', loadComponent: () => import('./compte/compte.component').then(mod => mod.CompteComponent)},
  {path: 'favoris', loadComponent: () => import('./favoris/favoris.component').then(mod => mod.FavorisComponent)},
];
