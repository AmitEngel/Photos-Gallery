import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  category: "flowers",
  currentPage: 1,
  loading: false,
  error: null,
};

const photosSlice = createSlice({
  name: "photos",
  initialState: initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
      state.currentPage = 1;
    },
    nextPage(state) {
      state.currentPage += 1;
    },
    prevPage(state) {
      state.currentPage -= 1;
    },
    fetchPhotosRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPhotosSuccess(state, action) {
      state.loading = false;
      state.photos = action.payload;
    },
    fetchPhotosError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const photosActions = photosSlice.actions;
export default photosSlice.reducer;
