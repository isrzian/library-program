import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IReader} from '../../interfaces/IReader';

type ReaderResponse = IReader[];

export const ReaderApi = createApi({
    reducerPath: 'reader',
    tagTypes: ['Reader'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/reader'}),
    endpoints: (build) => ({
        getReaders: build.query<ReaderResponse, void>({
            query: () => `search`,
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Reader' as const, id })),
                    { type: 'Reader', id: 'LIST' },
                ]
                : [{ type: 'Reader', id: 'LIST' }],
        }),
        addReader: build.mutation<IReader, Partial<IReader>>({
            query: (body) => ({
                url: '',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Reader', id: 'LIST' }],
        })
    })
});

export const {
    useGetReadersQuery,
    useAddReaderMutation,
} = ReaderApi;
