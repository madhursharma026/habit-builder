import { Test, TestingModule } from '@nestjs/testing';
import { AddHabitController } from './add-habit.controller';
import { AddHabitService } from './add-habit.service';

describe('AddHabitController', () => {
  let controller: AddHabitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddHabitController],
      providers: [AddHabitService],
    }).compile();

    controller = module.get<AddHabitController>(AddHabitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
