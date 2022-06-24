import React from "react";
import { Card } from "./../UI/Card";
import classes from "./Form.module.css";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { uiFormActions } from "./../store/reducers/authSlice";

export const Form = (props) => {
  const store = useSelector((state) => state.user);
console.log(store);



  const dispatch = useDispatch();
  const [emailValid, setEmailValid] = useState("");
  const [eValid, setEValid] = useState(false);
  const [passValid, setPassValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState("");
  let [st, setst] = useState(false);
  let [st2, setst2] = useState(false);
  const emailChangeHandler = (e) => {
    let emailValue = e.target.value;

    setEmailValid(emailValue);
    if (emailValue.includes("@")) {
      setEValid(true);
      setst(false);
    } else {
      setEValid(false);
      setst(true);
    }
  };
  let a = !eValid && st;
  const passwordChangeHandler = (e) => {
    let passValue = e.target.value;
    setPasswordValid(passValue);
    if (passValue.length > 6) {
      setPassValid(true);
      setst2(false);
    } else {
      setPassValid(false);
      setst2(true);
    }
  };
  let p = !passValid && st2;
  let formIsValid = true;
  if (eValid && passValid) {
    formIsValid = false;
  }
  const formSubmit = (e) => {
    e.preventDefault();
    props.onShow();
    dispatch(
      uiFormActions.emailHandler({
        email: emailValid,
        password: passwordValid,
      })
    );
  };

  let emailClasses = a
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control} `;

  let passwordClasses = p
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  return (
    <Card className={classes.formControl}>
      <form onSubmit={formSubmit}>
        <div className={emailClasses}>
          <label htmlFor="email">Your email</label>
          <input
            type="text"
            id="email"
            onChange={emailChangeHandler}
            value={emailValid}
          />
        </div>

        <div className={passwordClasses}>
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            value={passwordValid}
          />
        </div>
        <div className={classes.button}>
          <Button disabled={formIsValid} type="submit">
            post request
          </Button>
        </div>
      </form>
    </Card>
  );
};
