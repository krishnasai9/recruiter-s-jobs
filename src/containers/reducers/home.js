import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {},
  reducers: {
    getAlbums: (state, action) => {
      state.albums = action.payload;
    },
  },
});

export default homeSlice.reducer;

export const { getAlbums } = homeSlice.actions;