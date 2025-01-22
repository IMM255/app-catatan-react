import React, { useState } from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

function RegisterInput({ register }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

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
