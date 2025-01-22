import React from "react";
import PropTypes from "prop-types";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";
import { Link } from "react-router-dom";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { useNavigate } from "react-router-dom";

function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
      navigate("/");
    }
  }

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section className="login-page">
          <h2>
            {locale == "id"
              ? "Silahkan masuk untuk melanjutkan"
              : "Please login to continue"}
          </h2>
          <LoginInput login={onLogin} />
          <p>
            {locale === "id"
              ? "Belum punya akun? "
              : "Don't have an account yet? "}
            <Link to="/register">
              {locale === "id" ? "Daftar di sini." : "Register here."}
            </Link>
          </p>
        </section>
      )}
    </LocaleConsumer>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
