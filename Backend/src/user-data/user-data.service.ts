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
    let date = moment(today).subtract(4, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday5Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(5, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday6Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(6, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday7Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(7, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday8Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(8, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday9Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(9, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday10Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(10, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday11Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(11, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday12Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(12, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday13Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(13, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday14Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(14, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday15Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(15, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday16Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(16, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday17Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(17, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday18Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(18, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday19Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(19, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday20Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(20, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday21Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(21, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday22Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(22, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday23Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(23, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday24Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(24, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday25Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(25, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday26Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(26, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday27Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(27, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday28Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(28, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  findYesterday29Data(): Promise<UserDatum[]> {
    let today = moment().format("YYYY-MM-DD");
    let date = moment(today).subtract(29, 'days').format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: date } });
  }

  getvalueofspecificdate(date: Date): Promise<UserDatum[]> {
    let gettingDate = moment(date).format("YYYY-MM-DD");
    return this.userDataRepository.find({ where: { AddedDate: gettingDate } });
  }
}
