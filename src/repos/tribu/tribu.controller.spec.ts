import { Test, TestingModule } from '@nestjs/testing';
import { TribuController } from './tribu.controller';

describe('TribuController', () => {
  let controller: TribuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TribuController],
    }).compile();

    controller = module.get<TribuController>(TribuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
