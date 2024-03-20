import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers, getOneCamper } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    singleitem: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getAllCampers.rejected, handleRejected)
      .addCase(getOneCamper.pending, handlePending)
      .addCase(getOneCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleitem = action.payload;
      })
      .addCase(getOneCamper.rejected,handleRejected);
  },
});
export const campersReducer = campersSlice.reducer;
