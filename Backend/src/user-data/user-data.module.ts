import { Module } from '@nestjs/common';
import { UserDataService } from './user-data.service';
import { UserDataController } from './user-data.controller';
import { UserDatum } from './entities/user-datum.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserDatum])],
  controllers: [UserDataController],
  providers: [UserDataService]
})
export class UserDataModule {}
