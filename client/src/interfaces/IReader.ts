import {IRent} from './IRent';

export interface IReader {
    id: number;
    surname: string;
    name: string;
    patronymic: string;
    address: string;
    phone: string;
    rents?: IRent[];
}
