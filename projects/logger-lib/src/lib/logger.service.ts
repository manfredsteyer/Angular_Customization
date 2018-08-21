import { Injectable, Optional, Inject } from '@angular/core';
import { LoggerConfig } from './logger.config';
import { LogFormatterService } from './log-formatter.service';
import { LogAppender } from './log-appender';
import { LOG_APPENDERS } from './logger-lib.tokens';

@Injectable({
  providedIn: 'root'  // <-- Angular 6, Treeshakable Provider
})
export class LoggerService {

  constructor(
    @Inject(LOG_APPENDERS) private appenders: LogAppender[],
    private formatter: LogFormatterService,
    @Optional() private config: LoggerConfig) {
  }

  debug(message: string): void {
    if (!this.config.enableDebug) return;
    //console.debug(this.formatter.format(message));
    this.append('debug', message);
  }

  log(message: string): void {
    this.append('log', message);
  }

  append(logLevel: string, msg: string): void {
    this.appenders.forEach(a => {
      a.append(logLevel, this.formatter.format(msg));
    });
  }

}
