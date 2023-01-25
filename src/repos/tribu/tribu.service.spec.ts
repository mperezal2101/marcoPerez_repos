import { Test, TestingModule } from '@nestjs/testing';
import { TribuService } from './tribu.service';

describe('TribuService', () => {
  let service: TribuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TribuService],
    }).compile();

    service = module.get<TribuService>(TribuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
