import { Module } from '@nestjs/common';
import { LogService } from './log.service';

@Module({
  imports: [],
  controllers: [],
  exports: [LogService],
})
export class AppModule {}
