import { Injectable, Logger, Scope } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable({ scope: Scope.REQUEST })
export class LogService extends Logger {
    constructor() {
        super();
        this.setContext(v4());
    }
}

