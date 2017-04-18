import { Routes } from '@angular/router';

export const APP_ROUTING_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './views/home/home.module#HomeModule'
  },
  {
    path: 'listing',
    loadChildren: './views/listing/listing.module#ListingModule'
  }
];
