import { createSlice } from "@reduxjs/toolkit";
import { USER_DATA_BASE } from "../../constants/general";
import { uiActions } from "./uiSlice";

const initialState = {
  email: "",
  password: "",
  user: [],
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
    getUserNews(state, action) {
      console.log(action.payload, "payload");
      state.user = action.payload;
    },
  },
});

export const uiFormActions = formSlice.actions;
export default formSlice;

export const authEmailPassword = (store) => {
  return (dispatch) => {
    dispatch(
      uiActions.showNotice({
        status: "pending",
        title: "sending",
        message: "Sending authentification to data",
      })
    );
    fetch(`${USER_DATA_BASE}store.json`, {
      method: "POST",
      body: JSON.stringify(store),
      headers: {
        "Content-type": "aplication/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Sending form failed");
        }
        dispatch(
          uiActions.showNotice({
            status: "success",
            title: "Success!",
            message: "Send form success",
          })
        );
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotice({
            status: "error",
            title: "Sending...",
            message: error.message,
          })
        );
      });
  };
};
