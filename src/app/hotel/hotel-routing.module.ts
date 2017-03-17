import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelComponent } from './hotel.component';


const hotelRoutes: Routes = [
  { path: 'hotels', component: HotelComponent,
      children:[
        {path:'list', component:HotelListComponent},
        {path:'details', component:HotelDetailsComponent},
        {path:'', redirectTo:'list'}
      ]
 }
];

@NgModule({
  // imports: [RouterModule.forChild([
  //   { path: 'hotels', component: HotelListComponent },
  //   { path: 'hotel-details', component: HotelDetailsComponent }
  // ])],
  imports: [RouterModule.forChild(hotelRoutes)],
  exports: [RouterModule]
})
export class HotelRoutingModule {}