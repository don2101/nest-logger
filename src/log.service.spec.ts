import { Test, TestingModule } from '@nestjs/testing';
import { LogService } from './log.service';
import { LogModule } from './log.module';

describe('log service test', () => {
    let service: LogService;

    beforeEach(async() => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            providers: [LogService],
        }).compile();

        service = await module.resolve<LogService>(LogService);
    });

    it('it should be defined', () => {
        expect(service).toBeDefined();
    });
});
