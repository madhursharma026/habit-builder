import { AddHabit } from 'src/add-habit/entities/add-habit.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity()
export class UserDatum {
    // - Habbit Name :
    // - Points :
    // - Reverse: boolen
    // - Multilple: boolen, if its true will ask name of multiple
    // - Task Repeated Times:
    // - Tag:

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable: false})
    Reverse: boolean

    @Column({nullable: false})
    Multilple: boolean

    @Column({nullable: true, default: 1})
    TaskRepeatedTimes: number;

    @Column({nullable: false})
    TotalPoints: number;    

    @Column({ nullable: false })
    habitDataId: number;

    @ManyToOne(() => AddHabit, (habitData) => habitData.userDatas)
    habitData: AddHabit

    @Column({nullable: false, type: 'date', default: () => 'NOW()'})
    AddedDate: Date;
}