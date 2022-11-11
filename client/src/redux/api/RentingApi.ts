import {createApi} from '@reduxjs/toolkit/query/react';
import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IRent} from '../../interfaces/IRent';

type RentingResponse = IRent[];

export const RentingApi = createApi({
    reducerPath: 'renting',
    tagTypes: ['Renting'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/renting'}),
    endpoints: (build) => ({
        getRents: build.query<RentingResponse, void>({
            query: () => `search`,
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Renting' as const, id })),
                    { type: 'Renting', id: 'LIST' },
                ]
                : [{ type: 'Renting', id: 'LIST' }],
        }),
        addRent: build.mutation<IRent, Partial<IRent>>({
            query: (body) => ({
                url: '',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Renting', id: 'LIST' }],
        })
    })
})

export const {
    useAddRentMutation,
    useGetRentsQuery,
} = RentingApi;
