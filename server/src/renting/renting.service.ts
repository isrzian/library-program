import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {getRepository, Repository} from 'typeorm';
import {RentingEntity} from './renting.entity';
import {CreateRentDto} from './dtos/create-rent.dto';
import {SearchRentDto} from './dtos/search-rent.dto';

@Injectable()
export class RentingService {
    constructor(
        @InjectRepository(RentingEntity)
        private readonly rentingRepository: Repository<RentingEntity>
    ) {
    }

    async createRent(dto: CreateRentDto): Promise<RentingEntity> {
        const newRent = new RentingEntity();
        Object.assign(newRent, dto);

        return this.rentingRepository.save(newRent);
    }

    async search(dto?: SearchRentDto): Promise<RentingEntity[]> {
        const queryBuilder = getRepository(RentingEntity)
            .createQueryBuilder('renting')
            .leftJoinAndSelect('renting.book', 'book')
            .leftJoinAndSelect('renting.reader', 'reader')

        if (dto) {
            if (dto.returnDate) {
                queryBuilder.andWhere('renting.returnDate = :returnDate ::date', {returnDate: dto.returnDate})
            }

            if (dto.bookId) {
                queryBuilder.andWhere('renting.bookId = :bookId', {bookId: dto.bookId})
            }

            if (dto.readerId) {
                queryBuilder.andWhere('renting.readerId = :readerId', {readerId: dto.readerId})
            }

            if (dto.id) {
                queryBuilder.andWhere('renting.id = :id', {id: dto.id})
            }

            if (dto.isPassed) {
                queryBuilder.andWhere('renting.isPassed = :isPassed', {isPassed: dto.isPassed})
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
