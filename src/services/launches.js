import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// Define a service using a base URL and expected endpoints

export const launchesApi = createApi({
    reducerPath: 'launchesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spacexdata.com/v5/launches/'}),
    endpoints: (builder) => ({
        getLaunches: builder.query({
            query: ({ name, page }) => {
                const shouldSkip = !name && page === 0;
                return {
                    url: 'query',
                    method: 'POST',
                    body: {
                        query: name
                            ? {
                                name: {
                                    $regex: `${name}`,
                                    $options: 'i',
                                },
                            }
                            : {},
                        options: {
                            offset: page,
                            limit: 100,
                        },
                    },
                    skip: shouldSkip,
                };
            },
        }),
    }),
});

// Export hooks for usage in functional components
export const {useGetLaunchesQuery} = launchesApi;