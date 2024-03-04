import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
const SLOT_URL = "/slots";

export const slotApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    slots: build.query({
      query: () => {
        return {
          url: SLOT_URL,
          method: "GET",
        };
      },
      providesTags: [tagTypes.slot],
    }),
    // get single
    slot: build.query({
      query: (id: string) => ({
        url: `${SLOT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.slot],
    }),
    // create
    addSlot: build.mutation({
      query: (data) => ({
        url: SLOT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.slot],
    }),
    // update
    updateSlot: build.mutation({
      query: (data) => ({
        url: `${SLOT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.slot],
    }),
    // delete
    deleteSlot: build.mutation({
      query: (id) => ({
        url: `${SLOT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.slot],
    }),
  }),
});

export const {
  useAddSlotMutation,
  useSlotQuery,
  useSlotsQuery,
  useDeleteSlotMutation,
  useUpdateSlotMutation,
} = slotApi;
