import { LogAppender } from "@my/logger-lib";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomLogAppender implements LogAppender {
    
    append(logLevel: string, msg: string): void {
        if (logLevel === 'debug') {
            console.debug('custom', `<message>${msg}</message>`);
        }
        else {
            console.log('custom', `<message>${msg}</message>`);
        }
    }

}