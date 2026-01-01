import { Component, computed, inject, viewChild } from '@angular/core';
import {
  GoogleMap,
  MapAdvancedMarker,
  MapInfoWindow
} from '@angular/google-maps';
import { Parking } from '../../parking';

@Component({
  selector: 'app-cars',
  imports: [GoogleMap, MapAdvancedMarker, MapInfoWindow],
  templateUrl: './cars.html',
  styleUrl: './cars.scss'
})
export class Cars {
  private parkingService = inject(Parking);
  private readonly info = viewChild.required(MapInfoWindow);
  
  options: google.maps.MapOptions = {
    center: { lat: 37.98, lng: 23.72 },
    zoom: 9
  };
  positions = computed(() => {
    return this.parkingService.tickets().map(ticket => {
      const coords = ticket.location.split(',');
      return {
        car: ticket.plateNo,
        location: {
          lat: Number(coords[0]),
          lng: Number(coords[1])
        }
      };
    });
  });

  showTicket(marker: MapAdvancedMarker) {
    const ticket = this.parkingService.tickets().find(ticket => ticket.plateNo === marker.advancedMarker.title);
    this.info().open(marker, false, 'Arrived at: ' + ticket?.arrival);
  }
}
