import { Module } from '@nestjs/common';
import { LogService } from './log.service';

@Module({
  imports: [],
  controllers: [],
  providers: [],
  exports: [LogService],
})
export class LogModule {}
