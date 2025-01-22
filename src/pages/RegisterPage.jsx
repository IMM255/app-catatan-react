import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function RegisterPage() {
  const Navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      Navigate("/");
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section className="register-page">
          <h2>{locale == "id" ? "Daftar" : "Register"}</h2>
          <RegisterInput register={onRegisterHandler} />
          <p>
            {locale == "id" ? (
              <span>
                Kembali ke <Link to="/login">Masuk</Link>
              </span>
            ) : (
              <span>
                Back to <Link to="/login">Login</Link>
              </span>
            )}
          </p>
        </section>
      )}
    </LocaleConsumer>
  );
}

export default RegisterPage;
