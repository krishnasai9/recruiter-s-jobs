import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    signIn: (state, action) => {
      state.signIn = action.payload;
    },
  },
});

export default homeSlice.reducer;

export const { signIn } = homeSlice.actions;