import { Action } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';

export enum FlightBookingActionTypes {
  FlightsLoadedAction = '[FlightBooking] FlightsLoadedAction',
  FlightsLoadAction = '[FlightBooking] FlightsLoadAction',
  FlightUpdateAction = '[FlightBooking] FlightUpdateAction'
}

export class FlightsLoadedAction implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadedAction;
  constructor(readonly flights: Flight[]) { }
}

export class FlightUpdateAction implements Action {
  readonly type = FlightBookingActionTypes.FlightUpdateAction;
  constructor(readonly flight: Flight) { }
}

export class FlightsLoadAction implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadAction;
  constructor(
    readonly from: string, 
    readonly to: string, 
    readonly urgent: boolean) { }
}


export type FlightBookingActions = 
              FlightsLoadedAction | FlightsLoadAction | FlightUpdateAction; /* | FlightUpdatedAction; */

        
