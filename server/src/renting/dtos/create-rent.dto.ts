import {IsNotEmpty, IsString, IsNumber} from 'class-validator';

export class CreateRentDto {
    @IsNotEmpty()
    @IsString()
    returnDate: string;

    @IsNotEmpty()
    @IsNumber()
    discount: number;

    @IsNotEmpty()
    @IsNumber()
    cost: number;

    @IsNotEmpty()
    @IsNumber()
    surcharge: number;

    @IsNotEmpty()
    @IsNumber()
    bookId: number;

    @IsNotEmpty()
    @IsNumber()
    readerId: number;
}
