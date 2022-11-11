import {IBook} from './IBook';
import {IReader} from './IReader';

export interface IRent {
    id: number;
    issueDate?: string;
    returnDate: string;
    discount: number;
    cost?: number;
    surcharge: number;
    bookId: number;
    readerId: number;
    book?: IBook;
    reader?: IReader;
}
