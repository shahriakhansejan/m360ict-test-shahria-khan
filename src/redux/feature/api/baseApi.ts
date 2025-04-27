import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://dummyjson.com",
  }),
  endpoints: () => ({}),
});

export default baseApi;
