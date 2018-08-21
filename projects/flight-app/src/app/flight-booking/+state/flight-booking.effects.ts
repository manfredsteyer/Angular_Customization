import { Injectable } from '@angular/core';
import { FlightService } from '@flight-workspace/flight-api';
import { Actions, Effect } from '@ngrx/effects';
import { FlightBookingActionTypes, FlightsLoadAction, FlightsLoadedAction } from './flight-booking.actions';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class FlightBookingEffects {

    constructor(private flightService: FlightService, private actions$: Actions) {
    }

    @Effect() 
    flightsLoad = this
                    .actions$
                    .ofType(FlightBookingActionTypes.FlightsLoadAction)
                    .pipe(
                        switchMap((a: FlightsLoadAction)=> this.flightService.find(a.from, a.to, a.urgent)),
                        map(flights => new FlightsLoadedAction(flights))
                    );

}