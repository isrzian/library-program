import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {RentingEntity} from '../renting/renting.entity';

@Entity('readers')
export class ReaderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    surname: string;

    @Column()
    name: string;

    @Column()
    patronymic: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @OneToMany(
        () => RentingEntity,
        (rent) => rent.reader,
    )
    rents: RentingEntity[];
}
