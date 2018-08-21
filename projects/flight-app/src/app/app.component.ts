import {Component} from '@angular/core';
import { LoggerService } from '@my/logger-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private logger: LoggerService) { 
    logger.debug('Hello World!');
    logger.log('Application started ...');

    this.router.events.subscribe(e => console.debug('router event', e));
  }
}

