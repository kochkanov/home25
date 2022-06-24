import React from "react";
import classes from "./Header.module.css";
import { Button } from "@mui/material";
import { getEmailPassword } from "../../store/reducers/authSlice";
import { USER_DATA_BASE } from "./../../constants/general";
import { uiActions } from "./../../store/reducers/uiSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiFormActions } from "./../../store/reducers/authSlice";

export const Header = (props) => {
  const store = useSelector((store) => store.user.user);

  const dispatch = useDispatch();

  const getEmailPassword = async () => {
    const response = await fetch(`${USER_DATA_BASE}store.json`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "failed");
    }

    let userData = [];

    for (const key in data) {
      userData.push(data[key]);
    }
    console.log(userData);
    dispatch(uiFormActions.getUserNews(userData));
  };

  return (
    <div>
      <header className={classes.header}>
        <Button variant="contained" onClick={getEmailPassword}>
          Get request
        </Button>
        <div>
          <Button variant="contained" onClick={props.onShow}>
            Login
          </Button>
        </div>
      </header>

      <h1>My email:{store.length > 0 ? store[store.length - 1].email : ""}</h1>
      <h1>
        My password:{store.length > 0 ? store[store.length - 1].password : ""}
      </h1>
    </div>
  );
};
