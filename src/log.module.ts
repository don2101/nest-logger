import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogProvider } from './log.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [ LogService, LogProvider ],
  exports: [LogService, LogProvider ],
})
export class LogModule {}
