import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {BookEntity} from '../book/book.entity';
import {ReaderEntity} from '../reader/reader.entity';

@Entity('rents')
export class RentingEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    issueDate: string;

    @Column({type: 'date'})
    returnDate: string;

    @Column()
    discount: number;

    @Column()
    cost: number;

    @Column()
    surcharge: number;

    @Column()
    bookId: number;

    @Column()
    readerId: number;

    @Column({
        type: 'boolean',
        default: false,
    })
    isPassed: boolean;

    @ManyToOne(
        () => BookEntity,
        (book) => book.rents,
    )
    book: BookEntity;

    @ManyToOne(
        () => ReaderEntity,
        (reader) => reader.rents,
    )
    reader: ReaderEntity;
}
