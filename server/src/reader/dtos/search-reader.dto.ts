import {IsString} from 'class-validator';
import {QueryInterface} from '../../interfaces/QueryInterface';

export class SearchReaderDto extends QueryInterface {
    @IsString()
    surname?: string;

    @IsString()
    name?: string;

    @IsString()
    patronymic?: string;

    @IsString()
    phone?: string;
}
