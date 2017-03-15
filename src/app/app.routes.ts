import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
     
    {
      path: 'hotels',
      loadChildren: 'app/hotel/hotel.module#HotelModule'
     },
    {
      path: "",
      redirectTo:'/hotels',
      pathMatch: 'full'
     },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);