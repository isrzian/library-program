import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ReaderEntity} from './reader.entity';
import {getRepository, Repository} from 'typeorm';
import {CreateReaderDto} from './dtos/create-reader.dto';
import {SearchReaderDto} from './dtos/search-reader.dto';

@Injectable()
export class ReaderService {
    constructor(
        @InjectRepository(ReaderEntity)
        private readonly readerRepository: Repository<ReaderEntity>
    ) {
    }

    async createReader(dto: CreateReaderDto): Promise<ReaderEntity> {
        const phone = await this.readerRepository.findOne({
            phone: dto.phone,
        });

        if (phone) {
            throw new HttpException(
                'Читатель с таким телефоном уже существует!',
                HttpStatus.UNPROCESSABLE_ENTITY,
            );
        }

        const newReader = new ReaderEntity();
        Object.assign(newReader, dto);

        return this.readerRepository.save(newReader);
    }

    async search(dto?: SearchReaderDto): Promise<ReaderEntity[]> {
        const queryBuilder = getRepository(ReaderEntity)
            .createQueryBuilder('reader')
            .leftJoinAndSelect('reader.rents', 'rents')

        if (dto) {
            if (dto.surname) {
                queryBuilder.andWhere('reader.surname = :surname', {surname: dto.surname})
            }

            if (dto.name) {
                queryBuilder.andWhere('reader.name = :name', {name: dto.name})
            }

            if (dto.patronymic) {
                queryBuilder.andWhere('reader.patronymic = :patronymic', {patronymic: dto.patronymic})
            }

            if (dto.phone) {
                queryBuilder.andWhere('reader.phone = :phone', {phone: dto.phone})
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
