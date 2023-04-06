import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const launchesApi = createApi({
    reducerPath: 'launchesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spacexdata.com/v5/launches/'}),
    endpoints: (builder) => ({
        getLaunchByName: builder.query({
            query: (name, offset, limit) => ({
                url: 'query',
                method: 'POST',
                body: {
                    query: {
                        name: {
                            $regex: `^${name}$`,
                            $options: 'i'
                        },
                    },
                    options: {
                        offset: offset,
                        limit: limit,
                    },
                },
            }),
        }),
        getLaunches: builder.query({
            query: (offset) => ({
                url: 'query',
                method: 'POST',
                body: {
                    query: {},
                    options: {
                        offset: offset,
                        limit: 100,
                    },
                },
            }),
        }),
    }),
});

// Export hooks for usage in functional components
export const {useGetLaunchByNameQuery, useGetLaunchesQuery} = launchesApi;