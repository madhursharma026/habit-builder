const moment = require("moment")
import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddHabit } from './entities/add-habit.entity';

@Injectable()
export class AddHabitService {
    constructor(
        @InjectRepository(AddHabit)
        private habitRepository: Repository<AddHabit>,
    ) { }

    create(HabbitName: string, Points: number, Tag: string) {
        const HabitDetails = this.habitRepository.create({ HabbitName, Points, Tag });
        return this.habitRepository.save(HabitDetails);
    }
  
    singleHabitDetail(id: number) {
      if (!id) {
        return null;
      }
      return this.habitRepository.find({
        where: { Id: id }
      });
    }

    AllHabitDetails(): Promise<AddHabit[]> {     
        return this.habitRepository.find();
    }

    // findAll(): Promise<AddHabit[]> {
    //     let date = moment().format("YYYY-MM-DD");      
    //     return this.habitRepository.find();
    // }

    // findYesterdayData(): Promise<AddHabit[]> {
    //     let today = moment().format("YYYY-MM-DD");
    //     let date = moment(today).subtract(1, 'days').format("YYYY-MM-DD");      
    //     return this.habitRepository.find({where: {AddedDate: date}});
    // }

    // findYesterday2Data(): Promise<AddHabit[]> {
    //     let today = moment().format("YYYY-MM-DD");
    //     let date = moment(today).subtract(1, 'days').format("YYYY-MM-DD");      
    //     return this.habitRepository.find({where: {AddedDate: date}});
    // }

    // findYesterday3Data(): Promise<AddHabit[]> {
    //     let today = moment().format("YYYY-MM-DD");
    //     let date = moment(today).subtract(2, 'days').format("YYYY-MM-DD");      
    //     return this.habitRepository.find({where: {AddedDate: date}});
    // }

    // findYesterday4Data(): Promise<AddHabit[]> {
    //     let today = moment().format("YYYY-MM-DD");
    //     let date = moment(today).subtract(3, 'days').format("YYYY-MM-DD");      
    //     return this.habitRepository.find({where: {AddedDate: date}});
    // }

    // findYesterday5Data(): Promise<AddHabit[]> {
    //     let today = moment().format("YYYY-MM-DD");
    //     let date = moment(today).subtract(4, 'days').format("YYYY-MM-DD");      
    //     return this.habitRepository.find({where: {AddedDate: date}});
    // }

    // findYesterday6Data(): Promise<AddHabit[]> {
    //     let today = moment().format("YYYY-MM-DD");
    //     let date = moment(today).subtract(5, 'days').format("YYYY-MM-DD");       
    //     return this.habitRepository.find({where: {AddedDate: date}});
    // }
}
