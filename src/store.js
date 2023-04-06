import { configureStore } from '@reduxjs/toolkit';
import launchesReducer from './slices/launchesSlice';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { launchesApi } from './services/launches';

export const store = configureStore({
    reducer: {
        launches: launchesReducer,
        [launchesApi.reducerPath]: launchesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(launchesApi.middleware),
});

setupListeners(store.dispatch);