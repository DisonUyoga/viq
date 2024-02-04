import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://electronics233.pythonanywhere.com",
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
