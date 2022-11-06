import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AddHabit } from './add-habit/entities/add-habit.entity';
import { AddHabitModule } from './add-habit/add-habit.module';
import { UserDataModule } from './user-data/user-data.module';
import { UserDatum } from './user-data/entities/user-datum.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'habitdatabase',
          entities: [AddHabit, UserDatum],
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }), AddHabitModule, UserDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

