import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
});