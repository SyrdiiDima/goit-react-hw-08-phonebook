import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: 'contacts',
  endpoints: builder => ({
    getContactByName: builder.query({
      query: () => `contacts`,
      // method: 'GET',
      providesTags: ['contacts'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),

      invalidatesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: 'contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactByNameQuery,
  useDeleteContactsMutation,
  useAddContactMutation,
} = contactsApi;
