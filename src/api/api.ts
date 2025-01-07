import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import routes from './routes';
import { RootState } from './store';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: routes.defaultApi(),
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (user) => ({
        url: routes.auth(),
        method: 'POST',
        body: user,
      }),
    }),
    getUser: builder.query({
      query: () => routes.user.profile(),
    }),

    getFavourites: builder.query({
      query: () => routes.user.favourites(),
    }),
    addFavourites: builder.mutation({
      query: (requestId) => ({
        url: routes.user.favourites(),
        method: 'POST',
        body: {requestId: requestId},
        responseHandler: (response) => response.text(),
      })
    }),
    removeFavourites: builder.mutation({
      query: (requestId) => ({
        url: routes.user.remove(requestId),
        method: 'DELETE',
        responseHandler: (response) => response.text(),
      }),
    }),

    getRequestDetails: builder.query({
      query: (id) => routes.request.details(id),
    }),
    getRequestList: builder.query({
      query: () => routes.request.list(),
    }),
    contributeRequest: builder.mutation({
      query: (id) => ({
        url: routes.request.contribute(id),
        method: 'POST',
        body: {},
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useGetUserQuery,
  useGetFavouritesQuery,
  useAddFavouritesMutation,
  useRemoveFavouritesMutation,
  useGetRequestDetailsQuery,
  useGetRequestListQuery,
  useContributeRequestMutation,
} = api;
