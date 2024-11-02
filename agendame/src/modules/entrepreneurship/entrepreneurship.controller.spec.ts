import { Test, TestingModule } from '@nestjs/testing';
import { EntrepreneurshipController } from './entrepreneurship.controller';
import { EntrepreneurshipService } from './entrepreneurship.service';

describe('EntrepreneurshipController', () => {
  let controller: EntrepreneurshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrepreneurshipController],
      providers: [EntrepreneurshipService],
    }).compile();

    controller = module.get<EntrepreneurshipController>(EntrepreneurshipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
