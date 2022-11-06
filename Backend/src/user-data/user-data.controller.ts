import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserDataService } from './user-data.service';
import { CreateUserDatumDto } from './dto/create-user-datum.dto';
import { UpdateUserDatumDto } from './dto/update-user-datum.dto';

@Controller('user-data')
export class UserDataController {
    constructor(
        private userDataService: UserDataService
    ) { }


    @Post('addUserData/:points')
    async createCategory(@Param('points') points: number, @Body() body: CreateUserDatumDto) {
        const newUserData = await this.userDataService.create(+points, body.Multiple, body.Reverse, body.TaskRepeatedTimes, body.habitDataId,);
        return newUserData;
    }

    @Get('allData')
    async find() {
        const response = await this.userDataService.findAll();
        return response;
    }

    @Get('todaysData')
    async findTodaysData() {
        const response = await this.userDataService.findTodaysData();
        return response;
    }

    @Get('findYesterdayData')
    async findYesterdayData() {
        const response = await this.userDataService.findYesterdayData();
        return response;
    }

    @Get('findYesterday2Data')
    async findYesterday2Data() {
        const response = await this.userDataService.findYesterday2Data();
        return response;
    }

    @Get('findYesterday3Data')
    async findYesterday3Data() {
        const response = await this.userDataService.findYesterday3Data();
        return response;
    }

    @Get('findYesterday4Data')
    async findYesterday4Data() {
        const response = await this.userDataService.findYesterday4Data();
        return response;
    }

    @Get('findYesterday5Data')
    async findYesterday5Data() {
        const response = await this.userDataService.findYesterday5Data();
        return response;
    }

    @Get('findYesterday6Data')
    async findYesterday6Data() {
        const response = await this.userDataService.findYesterday6Data();
        return response;
    }
}
