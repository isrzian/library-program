import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {RentingEntity} from '../renting/renting.entity';

@Entity('books')
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    author: string;

    @Column()
    genre: string;

    @Column()
    collateralValue: number;

    @Column()
    rentalPrice: number;

    @OneToMany(
        () => RentingEntity,
        (renting) => renting.book,
    )
    rents: RentingEntity[];
}
