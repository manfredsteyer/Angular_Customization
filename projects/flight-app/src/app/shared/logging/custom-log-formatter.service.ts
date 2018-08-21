import { LogFormatterService } from '@my/logger-lib';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomLogFormatterService implements LogFormatterService {

  constructor() { }

  format(msg: string): string {
    return `[${new Date().toISOString()} ${msg}]`;
  }


}
