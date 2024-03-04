import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
const REVIEW_URL = "/slots";

export const reviewsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    reviews: build.query({
      query: () => {
        return {
          url: REVIEW_URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.review],
    }),
    // get single
    review: build.query({
      query: (id: string) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    // create
    addReview: build.mutation({
      query: (data) => ({
        url: REVIEW_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    // update
    updateReview: build.mutation({
      query: (data) => ({
        url: `${REVIEW_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    // delete
    deleteReview: build.mutation({
      query: (id) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useReviewQuery,
  useReviewsQuery,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} = reviewsApi;
