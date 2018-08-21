import { Injectable } from '@angular/core';
import { LogAppender } from './log-appender';

@Injectable()
export class ConsoleAppenderService implements LogAppender {
  
  constructor() { }

  append(logLevel: string, msg: string): void {
    if (logLevel === 'debug') {
      console.debug(msg);
    } 
    else {
      console.log(msg);
    }
  }


}
