import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'hotels', component: HotelListComponent },
    { path: 'hotel-details', component: HotelDetailsComponent }
  ])],
  exports: [RouterModule]
})
export class HotelRoutingModule {}