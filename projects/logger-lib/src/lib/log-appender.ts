
export abstract class LogAppender {
    abstract append(logLevel: string, msg: string): void;
}