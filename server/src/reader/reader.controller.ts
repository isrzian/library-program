import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {ReaderService} from './reader.service';
import {SearchReaderDto} from './dtos/search-reader.dto';
import {CreateReaderDto} from './dtos/create-reader.dto';

@Controller('reader')
export class ReaderController {
    constructor(
        private readonly readerService: ReaderService,
    ) {
    }

    @Post()
    async create(
        @Body() dto: CreateReaderDto,
    ) {
        return this.readerService.createReader(dto);
    }

    @Get('/search')
    async search(
        @Query() dto: SearchReaderDto,
    ) {
        return this.readerService.search(dto);
    }
}
