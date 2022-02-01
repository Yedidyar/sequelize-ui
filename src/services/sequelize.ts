import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sequelizeApi = createApi({
  reducerPath: "sequelizeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SEQUELIZE_UI_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getModelsName: builder.query<string[], void>({
      query: () => `schemas`,
    }),
  }),
});

export const { useGetModelsNameQuery } = sequelizeApi;
