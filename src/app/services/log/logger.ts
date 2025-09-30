import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export type LogLevel= 'debug'| 'info' | 'warn' |'error'
const priority: Record<LogLevel, number> = {
  debug: 10,
  info:20,
  warn: 30,
  error: 40
}
export class Logger {

  private readonly enabled: boolean=isDevMode();
  private level: LogLevel = this.enabled ? 'debug' : 'info';
  private log(type: LogLevel, msg: string, otro?:unknown){
    if(!this.enabled) return;
    if (priority[type] >=priority[this.level]) return;
    const time: string = new Date().toISOString();
    const line = `${time} [${type} ${msg}]`

    switch(type){
      case 'debug': console.debug(line, otro ?? '');break;
      case 'info': console.debug(line, otro ?? '');break;
      case 'warn': console.debug(line, otro ?? '');break;
      case 'error': console.debug(line, otro ?? '');break;
    }
  }
  
}
