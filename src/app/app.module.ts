import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { AppRoutingModule } from './app.routing.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CarouselModule, DropdownModule, AlertModule } from 'ng2-bootstrap';
import {HotelService  } from './services/hotel.service';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightShortDetailComponent } from './components/flight-short-detail/flight-short-detail.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { TaxisComponent } from './components/taxis/taxis.component';

import { HotelModule } from './hotel/hotel.module';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidebarComponent,
    FlightsComponent,
    FlightShortDetailComponent,
    FlightDetailsComponent,
    GiftsComponent,
    TaxisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CarouselModule,
    HotelModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
