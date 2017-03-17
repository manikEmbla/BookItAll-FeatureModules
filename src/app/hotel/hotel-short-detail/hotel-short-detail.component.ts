import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';
import {HotelService  } from '../../services/hotel.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hotel-short-detail',
  templateUrl: './hotel-short-detail.component.html',
  styleUrls: ['./hotel-short-detail.component.css']
})
export class HotelShortDetailComponent implements OnInit {

  constructor(private hotelService: HotelService, private router: Router, private route: ActivatedRoute) {
   }

  @Input() hotel: Hotel;

  ngOnInit() {
  }

  viewHotel(){
    this.hotelService.selectedHotel = this.hotel;
    this.router.navigate(['../details'], {relativeTo:this.route});
  }

}
