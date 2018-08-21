import { PaymentLibModule } from '@flight-workspace/payment-lib';
import { EffectsModule } from '@ngrx/effects';
import { TabbedPaneModule } from './tabbed-pane/tabbed-pane.module';
import { ConsoleAppenderService } from './../../../logger-lib/src/lib/console-appender.service';
import { LoggerModule } from './../../../logger-lib/src/lib/logger.module';
import { FlightCancellingModule } from './flight-booking/flight-cancelling/flight-cancelling.module';
import {HttpClientModule} from '@angular/common/http';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FlightApiModule} from '@flight-workspace/flight-api';

import {AppComponent} from './app.component';
import {APP_EXTRA_OPTIONS, APP_ROUTES} from './app.routes';
import {BasketComponent} from './basket/basket.component';
import {FlightBookingModule} from './flight-booking/flight-booking.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from './shared/shared.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import { CustomLogFormatterService } from './shared/logging/custom-log-formatter.service';
import { LOG_APPENDERS } from '@my/logger-lib';
import { CustomLogAppender } from './shared/logging/custom-log-appender';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './+state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    
    PaymentLibModule,

    // FlightBookingModule, // Prevent Lazy Loading
    
    TabbedPaneModule,

    FlightCancellingModule,

    LoggerModule.forRoot({ enableDebug: false }, CustomLogFormatterService),

    FlightApiModule.forRoot(),
    SharedModule.forRoot(),
    
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    
    StoreModule.forRoot(reducers, { metaReducers }),
    (!environment.production) ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [
    {
      provide: LOG_APPENDERS,
      //useClass: CustomLogAppender,
      useFactory: () => {
        if (environment.production) {
          return new CustomLogAppender();
        }
        else {
          return new ConsoleAppenderService();
        }
      },
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
