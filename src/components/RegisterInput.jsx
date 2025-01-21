import React, { useState } from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

function RegisterInput({ register }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
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
            placeholder="Nama"
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
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={onPasswordChange}
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
