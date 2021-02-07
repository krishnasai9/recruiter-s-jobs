import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "jobs",
  initialState: {},
  reducers: {
    jobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export default homeSlice.reducer;

export const { jobs } = homeSlice.actions;