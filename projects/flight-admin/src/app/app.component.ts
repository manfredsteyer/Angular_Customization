import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) {
    console.debug('prod', environment);

    router.events.subscribe(e => console.debug('event', e));

  } 
}

