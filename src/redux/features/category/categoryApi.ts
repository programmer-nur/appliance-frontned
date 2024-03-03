import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";

const CATEGORY_URL = "/categories";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    categories: build.query({
      query: () => {
        return {
          url: CATEGORY_URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.category],
    }),
    // get single
    category: build.query({
      query: (id: string) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    // create
    addCategory: build.mutation({
      query: (data) => ({
        url: CATEGORY_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    // update
    updateCategory: build.mutation({
      query: (data) => ({
        url: `${CATEGORY_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    // delete
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `${CATEGORY_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
    useAddCategoryMutation,useCategoriesQuery,useCategoryQuery,useUpdateCategoryMutation,useDeleteCategoryMutation
} = categoryApi;
