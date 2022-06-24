import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
  spinner: false,
  notification: null,
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
    showNotice(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.status,
        message: action.payload.message,
      };
    },
    hideNotification(state) {
			state.notification = null
		},
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
