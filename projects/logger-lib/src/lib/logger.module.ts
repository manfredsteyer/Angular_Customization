import { ConsoleAppenderService } from './console-appender.service';
import { DefaultLogFormatterService } from './default-log-formatter.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';
import { LoggerConfig } from './logger.config';
import {LoggerService} from './logger.service';
import { LogFormatterService } from './log-formatter.service';
import { LogAppender } from './log-appender';
import { LOG_APPENDERS } from './logger-lib.tokens';

// imports: [ LoggerModule.forRoot({ ... }) ] 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LogMonitorComponent
  ],
  // providers: [
  //   LoggerService
  // ],
  exports: [
    LogMonitorComponent
  ]
})
export class LoggerModule {

  // Setup
  static forRoot(config: LoggerConfig, logFormatterClass: any = DefaultLogFormatterService): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config },
        { provide: LogFormatterService, useClass: logFormatterClass},
        { provide: LOG_APPENDERS, useClass: ConsoleAppenderService, multi: true}
      ] 
    }
  }

}
