import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
  spinner: false,
};
const uiSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleSpinner(state) {
      state.spinner = !state.spinner;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
