import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddHabitService } from './add-habit.service';
import { AddHabit } from './entities/add-habit.entity';
import { AddHabitController } from './add-habit.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AddHabit])],
  controllers: [AddHabitController],
  providers: [AddHabitService]
})
export class AddHabitModule {}

