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

    @Get('findYesterday7Data')
    async findYesterday7Data() {
        const response = await this.userDataService.findYesterday7Data();
        return response;
    }

    @Get('findYesterday8Data')
    async findYesterday8Data() {
        const response = await this.userDataService.findYesterday8Data();
        return response;
    }

    @Get('findYesterday9Data')
    async findYesterday9Data() {
        const response = await this.userDataService.findYesterday9Data();
        return response;
    }

    @Get('findYesterday10Data')
    async findYesterday10Data() {
        const response = await this.userDataService.findYesterday10Data();
        return response;
    }

    @Get('findYesterday11Data')
    async findYesterday11Data() {
        const response = await this.userDataService.findYesterday11Data();
        return response;
    }

    @Get('findYesterday12Data')
    async findYesterday12Data() {
        const response = await this.userDataService.findYesterday12Data();
        return response;
    }

    @Get('findYesterday13Data')
    async findYesterday13Data() {
        const response = await this.userDataService.findYesterday13Data();
        return response;
    }

    @Get('findYesterday14Data')
    async findYesterday14Data() {
        const response = await this.userDataService.findYesterday14Data();
        return response;
    }

    @Get('findYesterday15Data')
    async findYesterday15Data() {
        const response = await this.userDataService.findYesterday15Data();
        return response;
    }

    @Get('findYesterday16Data')
    async findYesterday16Data() {
        const response = await this.userDataService.findYesterday16Data();
        return response;
    }

    @Get('findYesterday17Data')
    async findYesterday17Data() {
        const response = await this.userDataService.findYesterday17Data();
        return response;
    }

    @Get('findYesterday18Data')
    async findYesterday18Data() {
        const response = await this.userDataService.findYesterday18Data();
        return response;
    }

    @Get('findYesterday19Data')
    async findYesterday19Data() {
        const response = await this.userDataService.findYesterday19Data();
        return response;
    }

    @Get('findYesterday20Data')
    async findYesterday20Data() {
        const response = await this.userDataService.findYesterday20Data();
        return response;
    }

    @Get('findYesterday21Data')
    async findYesterday21Data() {
        const response = await this.userDataService.findYesterday21Data();
        return response;
    }

    @Get('findYesterday22Data')
    async findYesterday22Data() {
        const response = await this.userDataService.findYesterday22Data();
        return response;
    }

    @Get('findYesterday23Data')
    async findYesterday23Data() {
        const response = await this.userDataService.findYesterday23Data();
        return response;
    }

    @Get('findYesterday24Data')
    async findYesterday24Data() {
        const response = await this.userDataService.findYesterday24Data();
        return response;
    }

    @Get('findYesterday25Data')
    async findYesterday25Data() {
        const response = await this.userDataService.findYesterday25Data();
        return response;
    }

    @Get('findYesterday26Data')
    async findYesterday26Data() {
        const response = await this.userDataService.findYesterday26Data();
        return response;
    }

    @Get('findYesterday27Data')
    async findYesterday27Data() {
        const response = await this.userDataService.findYesterday27Data();
        return response;
    }

    @Get('findYesterday28Data')
    async findYesterday28Data() {
        const response = await this.userDataService.findYesterday28Data();
        return response;
    }

    @Get('findYesterday29Data')
    async findYesterday29Data() {
        const response = await this.userDataService.findYesterday29Data();
        return response;
    }

    @Get('getvalueofspecificdate/:date')
    async getvalueofspecificdate(@Param('date') date: Date) {
        const response = await this.userDataService.getvalueofspecificdate(date);
        return response;
    }
}
