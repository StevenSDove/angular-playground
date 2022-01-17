import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log = (level: LogLevel, ...params: any[]): void => {
    const { log, debug, info, warn, error } = console;
    let logger: Function = info;
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
    logger(...params);
  };
  debug(...params: any[]): void {
    this.log(LogLevel.debug, ...params);
  }
  info(...params: any[]): void {
    this.log(LogLevel.info, ...params);
  }
  warning(...params: any[]): void {
    this.log(LogLevel.warning, ...params);
  }
  error(...params: any[]): void {
    this.log(LogLevel.error, ...params);
  }
}

export enum LogLevel {
  'debug',
  'info',
  'warning',
  'error',
}
