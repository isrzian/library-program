import {configureStore} from '@reduxjs/toolkit'
import {BookApi, ReaderApi, RentingApi} from './api'

export const store = configureStore({
    reducer: {
        [ReaderApi.reducerPath]: ReaderApi.reducer,
        [BookApi.reducerPath]: BookApi.reducer,
        [RentingApi.reducerPath]: RentingApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        ReaderApi.middleware,
        BookApi.middleware,
        RentingApi.middleware,
    )
})
