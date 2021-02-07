import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "signup",
  initialState: {},
  reducers: {
    signUp: (state, action) => {
      state.signUp = action.payload;
    },
  },
});

export default homeSlice.reducer;

export const { signUp } = homeSlice.actions;