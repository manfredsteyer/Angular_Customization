import { InjectionToken } from "@angular/core";
import { LogAppender } from "./log-appender";

export const LOG_APPENDERS = new InjectionToken<LogAppender>('LOG_APPENDERS');