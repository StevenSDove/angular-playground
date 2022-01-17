import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log(level: LogLevel, ...message: any[]): void {
    const { log, debug, info, warn, error } = console;
    let logger = log;
    switch (level) {
      case LogLevel.debug:
        logger = debug;
        break;
      case LogLevel.info:
        logger = info;
        break;
      case LogLevel.warning:
        logger = warn;
        break;
      case LogLevel.error:
        logger = error;
        break;
    }
    logger(...message);
  }
  debug(...message: any[]): void {
    this.log(LogLevel.debug, ...message);
  }
  info(...message: any[]): void {
    this.log(LogLevel.info, ...message);
  }
  warning(...message: any[]): void {
    this.log(LogLevel.warning, ...message);
  }
  error(...message: any[]): void {
    this.log(LogLevel.error, ...message);
  }
}

export enum LogLevel {
  'debug',
  'info',
  'warning',
  'error',
}
