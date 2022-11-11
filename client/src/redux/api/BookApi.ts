import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IBook} from '../../interfaces/IBook';

type BookResponse = IBook[];

export const BookApi = createApi({
    reducerPath: 'book',
    tagTypes: ['Book'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/book'}),
    endpoints: (build) => ({
        getBooks: build.query<BookResponse, void>({
            query: () => `search`,
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Book' as const, id })),
                    { type: 'Book', id: 'LIST' },
                ]
                : [{ type: 'Book', id: 'LIST' }],
        }),
        addBook: build.mutation<IBook, Partial<IBook>>({
            query: (body) => ({
                url: '',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Book', id: 'LIST' }],
        })
    })
});

export const {
    useAddBookMutation,
    useGetBooksQuery,
} = BookApi;
