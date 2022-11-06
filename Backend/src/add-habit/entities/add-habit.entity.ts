import { UserDatum } from 'src/user-data/entities/user-datum.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class AddHabit {
    // - Habbit Name :
    // - Points :
    // - Reverse: boolen
    // - Multilple: boolen, if its true will ask name of multiple
    // - Task Repeated Times:
    // - Tag:

    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable: false})
    HabbitName: string;

    @Column({nullable: false})
    Points: number;

    @Column({nullable: false})
    Tag: string;

    @OneToMany(() => UserDatum, (userData) => userData.habitData)
    userDatas: UserDatum[]
}