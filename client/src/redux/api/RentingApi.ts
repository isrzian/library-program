import {createApi} from '@reduxjs/toolkit/query/react';
import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IRent} from '../../interfaces/IRent';

type RentingResponse = IRent[];

export const RentingApi = createApi({
    reducerPath: 'renting',
    tagTypes: ['Renting'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/renting'}),
    endpoints: (build) => ({
        getRents: build.query<RentingResponse, {isPassed: boolean}>({
            query: (query) => ({
                url: 'search',
                method: 'GET',
                query,
            }),
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
        }),
        passedRent: build.mutation<IRent, number>({
            query: (rentId) => ({
                url: `/${rentId}`,
                method: 'PUT',
            }),
            invalidatesTags: [{ type: 'Renting', id: 'LIST' }],
        })
    })
})

export const {
    useAddRentMutation,
    useGetRentsQuery,
    usePassedRentMutation,
} = RentingApi;
