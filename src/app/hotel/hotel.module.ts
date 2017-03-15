
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HotelRoutingModule } from './hotel-routing.module';

import { HotelListComponent } from './hotel-list/hotel-list.component';
import { CarouselModule, } from 'ng2-bootstrap';
import {HotelService  } from '../services/hotel.service';
import { HotelShortDetailComponent } from './hotel-short-detail/hotel-short-detail.component';
import { SlideShowComponent } from '../shared/slide-show/slide-show.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';


@NgModule({
  declarations: [
    HotelListComponent,
    HotelShortDetailComponent,
    SlideShowComponent,
    HotelDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    CarouselModule,
    HotelRoutingModule
  ],
  providers: [HotelService],
})
export class HotelModule { 

}
