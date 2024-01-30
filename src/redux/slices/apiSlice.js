import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.viqtech.co.ke",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/products/",
    }),
    getProduct: builder.query({
      query: (id) => `/api/products/${id}/`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = apiSlice;
