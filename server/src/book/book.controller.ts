import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {BookService} from './book.service';
import {CreateBookDto} from './dtos/create-book.dto';
import {SearchBookDto} from './dtos/search-book.dto';

@Controller('book')
export class BookController {
    constructor(
        private readonly bookService: BookService,
    ) {
    }

    @Post()
    async create(
        @Body() dto: CreateBookDto,
    ) {
        return this.bookService.createBook(dto);
    }

    @Get('/search')
    async search(
        @Query() dto: SearchBookDto,
    ) {
        return this.bookService.search(dto);
    }
}
