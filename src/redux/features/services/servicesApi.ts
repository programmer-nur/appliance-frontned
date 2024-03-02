import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

const SERVICE_URL = "/services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createService: build.mutation({
      query: (loginData) => ({
        url: `${SERVICE_URL}`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    getServices: build.query({
      query: () => ({
        url: `${SERVICE_URL}`,
        method: "GET"
      }),
      providesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useCreateServiceMutation,
} = serviceApi;