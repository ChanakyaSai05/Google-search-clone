import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
  },
  reducers: {
    set_data: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { set_data } = userSlice.actions;
export const selectUser = (state) => state.user.data;
export default userSlice.reducer;
