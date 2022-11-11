import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BookEntity} from './book.entity';
import {getRepository, Repository} from 'typeorm';
import {ReaderEntity} from '../reader/reader.entity';
import {SearchReaderDto} from '../reader/dtos/search-reader.dto';
import {CreateBookDto} from './dtos/create-book.dto';
import {SearchBookDto} from './dtos/search-book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>
    ) {
    }

    async createBook(dto: CreateBookDto): Promise<BookEntity> {
        const bookName = await this.bookRepository.findOne({
            name: dto.name,
        });

        if (bookName) {
            throw new HttpException(
                'Книга с таким названием уже существует!',
                HttpStatus.UNPROCESSABLE_ENTITY,
            );
        }

        const newBook = new ReaderEntity();
        dto.rentalPrice = +dto.rentalPrice;
        dto.collateralValue = +dto.collateralValue;
        Object.assign(newBook, dto);

        return this.bookRepository.save(newBook);
    }

    async search(dto?: SearchBookDto): Promise<BookEntity[]> {
        const queryBuilder = getRepository(BookEntity)
            .createQueryBuilder('book')
            .leftJoinAndSelect('book.rents', 'rents')

        if (dto) {
            if (dto.author) {
                queryBuilder.andWhere('book.author = :author', {author: dto.author})
            }

            if (dto.name) {
                queryBuilder.andWhere('book.name = :name', {name: dto.name})
            }

            if (dto.genre) {
                queryBuilder.andWhere('book.genre = :genre', {genre: dto.genre})
            }
        }

        if (dto.limit) {
            queryBuilder.limit(dto.limit)
        }

        if (dto.offset) {
            queryBuilder.offset(dto.offset)
        }

        return queryBuilder.getMany();
    }
}
