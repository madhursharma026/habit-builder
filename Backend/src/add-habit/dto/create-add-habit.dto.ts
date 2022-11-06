import { IsString , IsNumber } from 'class-validator';

export class CreateAddHabitDto {
    @IsString()
    HabbitName: string;

    @IsNumber()
    Points: number;

    @IsString()
    Tag: string;
}
