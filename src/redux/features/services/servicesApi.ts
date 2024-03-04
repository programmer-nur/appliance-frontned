import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import {  IMeta } from "@/types";
import { IService } from "@/types/service";

const SERVICE_URL = "/services";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    services: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: SERVICE_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IService[], meta: IMeta) => {
        return {
          services: response,
          meta,
        };
      },
      providesTags: [tagTypes.service],
    }),
    // get single
    service: build.query({
      query: (id: string) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    // create
    addService: build.mutation({
      query: (data) => ({
        url: SERVICE_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    // update
    updateService: build.mutation({
      query: (data) => ({
        url: `${SERVICE_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    // delete
    deleteService: build.mutation({
      query: (id) => ({
        url: `${SERVICE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
 useAddServiceMutation,useDeleteServiceMutation,useServicesQuery,useServiceQuery
} = serviceApi;
