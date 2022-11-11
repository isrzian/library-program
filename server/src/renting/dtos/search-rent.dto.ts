import {QueryInterface} from '../../interfaces/QueryInterface';
import {IsNumber, IsString} from 'class-validator';

export class SearchRentDto extends QueryInterface {
    @IsNumber()
    id: number;

    @IsString()
    returnDate?: string;

    @IsNumber()
    bookId?: number;

    @IsNumber()
    readerId?: number;
}
