import {IsString, IsNumber} from 'class-validator';
import {QueryInterface} from '../../interfaces/QueryInterface';

export class SearchBookDto extends QueryInterface {
    @IsString()
    name?: string;

    @IsString()
    author?: string;

    @IsString()
    genre?: string;

    @IsNumber()
    collateralValue?: number;

    @IsNumber()
    rentalPrice?: number;
}
