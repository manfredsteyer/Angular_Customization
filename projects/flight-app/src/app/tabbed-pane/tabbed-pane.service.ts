import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TabbedPaneService {

  jumpBy$ = new Subject<number>();

}
