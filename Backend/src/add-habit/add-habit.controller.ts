import { AddHabitService } from "./add-habit.service";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateAddHabitDto } from "./dto/create-add-habit.dto";

@Controller('add-habit')
export class AddHabitController {
    constructor(
        private addHabitService: AddHabitService
    ) { }

    @Post('addHabit')
    async createCategory(@Body() body: CreateAddHabitDto) {
        const newProduct = await this.addHabitService.create(body.HabbitName, body.Points, body.Tag);
        return newProduct;
    }

    @Get("/singleHabitDetail/:id")
    findSingleProduct(@Param('id') id: number) {
        return this.addHabitService.singleHabitDetail(+id);
    }

    @Get('allHabit')
    async AllHabitDetails() {
        const response = await this.addHabitService.AllHabitDetails();
        return response;
    }

    // @Get('allData')
    // async findAll() {
    //     const response = await this.addHabitService.findAll();
    //     return response;
    // }

    // @Get('findYesterdayData')
    // async findYesterdayData() {
    //     const response = await this.addHabitService.findYesterdayData();
    //     return response;
    // }

    // @Get('findYesterday2Data')
    // async findYesterday2Data() {
    //     const response = await this.addHabitService.findYesterday2Data();
    //     return response;
    // }

    // @Get('findYesterday3Data')
    // async findYesterday3Data() {
    //     const response = await this.addHabitService.findYesterday3Data();
    //     return response;
    // }

    // @Get('findYesterday4Data')
    // async findYesterday4Data() {
    //     const response = await this.addHabitService.findYesterday4Data();
    //     return response;
    // }

    // @Get('findYesterday5Data')
    // async findYesterday5Data() {
    //     const response = await this.addHabitService.findYesterday5Data();
    //     return response;
    // }

    // @Get('findYesterday6Data')
    // async findYesterday6Data() {
    //     const response = await this.addHabitService.findYesterday6Data();
    //     return response;
    // }
}
