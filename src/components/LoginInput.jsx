import React, { useState } from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";
import useInput from "./UseInput";

function LoginInput({ login }) {
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email: email,
      password: password,
    });
  };
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <form onSubmit={onSubmitHandler} className="input-login">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={onEmailChangeHandler}
              className=""
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChangeHandler}
            />
            <button>{locale === "id" ? "Masuk" : "Login"}</button>
          </form>
        );
      }}
    </LocaleConsumer>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
