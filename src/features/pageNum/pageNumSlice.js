import { createSlice } from "@reduxjs/toolkit";

export const pageNumSlice = createSlice({
  name: "pageNum",
  initialState: {
    value: 1
  },
  reducer: {
    inc: (state) => state.value + 1,
    dec: (state) => state.value - 1
  }
});

export const { inc, dec } = pageNumSlice.actions;

export const selectPageNum = (state) => state.pageNum.value;
