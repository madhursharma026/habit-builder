import { Test, TestingModule } from '@nestjs/testing';
import { AddHabitService } from './add-habit.service';

describe('AddHabitService', () => {
  let service: AddHabitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddHabitService],
    }).compile();

    service = module.get<AddHabitService>(AddHabitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
