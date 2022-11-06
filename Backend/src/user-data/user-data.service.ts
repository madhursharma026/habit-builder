const moment = require("moment")
import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDatum } from './entities/user-datum.entity';

@Injectable()
export class UserDataService {
  constructor(
    @InjectRepository(UserDatum)
    private userDataRepository: Repository<UserDatum>,
  ) { }


  create(points: number, Reverse: boolean, Multilple: boolean, TaskRepeatedTimes: number, habitDataId: number) {
    const HabitDetails = this.userDataRepository.create({ Reverse, Multilple, TaskRepeatedTimes, habitDataId });
    HabitDetails.TotalPoints = points * TaskRepeatedTimes
    return this.userDataRepository.save(HabitDetails);
  }

  findAll(): Promise<UserDatum[]> {
    return this.userDataRepository.find();
  }

  findTodaysData(): Promise<UserDatum[]> {
    let date = moment().format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date }, relations: ['habitData'] });
  }

  findYesterdayData(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(1, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday2Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(2, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday3Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(3, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday4Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(1, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday5Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(2, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday6Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(3, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }
}
