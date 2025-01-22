import React, { useState } from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";
import useInput from "./UseInput";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPassword] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    register({
      name,
      email,
      password,
    });
  };
  return (
    <LocaleConsumer>
      {({ locale }) => (
        <form onSubmit={onSubmitHandler} className="input-register">
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder={locale == "id" ? "Nama" : "Name"}
            className=""
            value={name}
            onChange={onNameChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChange}
          />
          <input
            type="password"
            placeholder={locale == "id" ? "Kata Sandi" : "Password"}
            autoComplete="current-password"
            value={password}
            onChange={onPasswordChange}
          />
          <input
            type="password"
            placeholder={
              locale == "id" ? "Konfirmasi kata sandi" : "Confirm Password"
            }
            autoComplete="current-password"
            value={confirmPassword}
            onChange={onConfirmPassword}
          />
          <button>{locale === "id" ? "Daftar" : "Register"}</button>
        </form>
      )}
    </LocaleConsumer>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
