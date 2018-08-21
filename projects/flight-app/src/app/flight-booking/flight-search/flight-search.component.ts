import { FlightsLoadAction, FlightUpdateAction } from './../+state/flight-booking.actions';
import {Component, OnInit} from '@angular/core';

import {FlightService, Flight} from '@flight-workspace/flight-api';
import { FlightBookingStateRef, getFlights, getFilteredFlights } from '../+state/flight-booking.reducer';
import { Store } from '@ngrx/store';
import { Observable } from '../../../../../../node_modules/rxjs';
import { FlightsLoadedAction } from '../+state/flight-booking.actions';
import { take } from '../../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg'; // in Germany
  to: string = 'Graz'; // in Austria
  urgent: boolean = false;

  flights$: Observable<Flight[]>

  constructor(
    private flightService: FlightService,
    private store: Store<FlightBookingStateRef>) {
  }

  ngOnInit() {
    this.flights$ = this.store.select(getFilteredFlights);
  }


  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };


  search(): void {
    if (!this.from || !this.to) return;
    this.store.dispatch(new FlightsLoadAction(this.from, this.to, this.urgent));
  }

  delay(): void {
    this.store.select(s => s.flightBooking.flights).pipe(take(1)).subscribe(f => {

      const oldDate = new Date(f[0].date);
      const newDate = new Date(oldDate.getTime() + 1000 * 15* 60);
      const newFlight: Flight = {
        ...f[0],
        date: newDate.toISOString()
      };
      this.store.dispatch(new FlightUpdateAction(newFlight));

    })
  }

}
