import { Injectable } from '@angular/core';

export abstract class LogFormatterService {

  constructor() { }

  abstract format(msg: string): string;

}
