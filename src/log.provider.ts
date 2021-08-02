import { Provider, Scope } from "@nestjs/common";
import { LogService } from './log.service';

export const LogProvider = {
    provide: 'LOG',
    useClass: LogService,
    scope: Scope.REQUEST
} as Provider
