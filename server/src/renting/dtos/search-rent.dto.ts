import {QueryInterface} from '../../interfaces/QueryInterface';
import {IsNumber, IsString, IsBoolean} from 'class-validator';

export class SearchRentDto extends QueryInterface {
    @IsNumber()
    id?: number;

    @IsString()
    returnDate?: string;

    @IsBoolean()
    isPassed?: boolean;

    @IsNumber()
    bookId?: number;

    @IsNumber()
    readerId?: number;
}
