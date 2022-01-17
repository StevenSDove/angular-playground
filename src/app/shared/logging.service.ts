import { Injectable } from '@angular/core';

const { log, debug, info, warn, error } = console;

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log(level: LogLevel, ...data: any[]): void {
    console[level](...data);
  }
  debug(...data: any[]): void {
    this.log(LogLevel.debug, ...data);
  }
  info(...data: any[]): void {
    this.log(LogLevel.info, ...data);
  }
  warning(...data: any[]): void {
    this.log(LogLevel.warning, ...data);
  }
  error(...data: any[]): void {
    this.log(LogLevel.error, ...data);
  }
}

export enum LogLevel {
  debug = 'debug',
  info = 'info',
  warning = 'warn',
  error = 'error',
}
