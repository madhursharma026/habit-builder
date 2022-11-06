import { PartialType } from '@nestjs/mapped-types';
import { CreateAddHabitDto } from './create-add-habit.dto';

export class UpdateAddHabitDto extends PartialType(CreateAddHabitDto) {}
