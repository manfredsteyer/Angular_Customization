import { FlightBookingStateRef } from './flight-booking.reducer';
import { Action, createSelector } from '@ngrx/store';
import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';
import { Flight } from '@flight-workspace/flight-api';


export const getFlights = 
  (s: FlightBookingStateRef) => s.flightBooking.flights;


export const getFilteredFlights =
        createSelector(
          (s: FlightBookingStateRef) => s.flightBooking.flights,
          (s: FlightBookingStateRef) => s.flightBooking.blackList,
          (flights, blackList) => flights.filter(f => blackList.indexOf(f.id) === -1)
        );


export interface FlightBookingStateRef {
  flightBooking: FlightState;
  
}

export interface FlightState {
    flights: Flight[];
    blackList: number[];
    
}

export const initialFlightState: FlightState = {
    flights: [],
    blackList: [5]
};

export function reducer(state = initialFlightState, action: FlightBookingActions): FlightState {
  switch (action.type) {

    case FlightBookingActionTypes.FlightsLoadedAction:
      // state = { flightId: 17, delay: "50m" }
      return { ...state, flights: action.flights };


    case FlightBookingActionTypes.FlightUpdateAction:
      const newFlights = state.flights.map(f => f.id == action.flight.id? action.flight : f);
      return { ...state, flights: newFlights };

    default:
      return state;
  }
}
