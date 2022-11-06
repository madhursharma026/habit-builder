import { IsBoolean, IsNumber } from 'class-validator';

export class CreateUserDatumDto {
    @IsBoolean()
    Reverse: boolean;

    @IsBoolean()
    Multiple: boolean;

    @IsNumber()
    TaskRepeatedTimes: number;

    @IsNumber()
    habitDataId: number;
}
