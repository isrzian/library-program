import {IRent} from './IRent';

export interface IBook {
    id: number;
    name: string;
    author: string;
    genre: string;
    collateralValue: number;
    rentalPrice: number;
    rents?: IRent[];
}
