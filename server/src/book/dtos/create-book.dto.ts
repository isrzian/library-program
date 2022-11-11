import {IsNotEmpty, IsString} from 'class-validator';

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsString()
    genre: string;

    @IsNotEmpty()
    collateralValue: number;

    @IsNotEmpty()
    rentalPrice: number;
}
