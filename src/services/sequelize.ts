import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TableDescribe } from "../types";

export const sequelizeApi = createApi({
  reducerPath: "sequelizeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SEQUELIZE_UI_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getModelsName: builder.query<string[], void>({
      query: () => `schemas`,
    }),
    getModelSchemaByName: builder.query<TableDescribe, string>({
      query: (name) => `/schema/name/${name}`,
    }),
  }),
});

export const { useGetModelsNameQuery, useGetModelSchemaByNameQuery } =
  sequelizeApi;
