import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const formSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    emailHandler(state, action) {
      localStorage.setItem("users", true);
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const uiFormActions = formSlice.actions;
export default formSlice;
