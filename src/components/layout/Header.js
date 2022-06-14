import React from "react";
import classes from "./Header.module.css";
import { Button } from "@mui/material";
export const Header = (props) => {
  return (
    <header className={classes.header}>
      <Button variant="contained" onClick={props.onShow}>
        Login
      </Button>
    </header>
  );
};
