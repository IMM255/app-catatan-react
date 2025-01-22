import React, { Children, useCallback, useEffect, useState } from "react";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import ArchivedPage from "../pages/ArchivedPage";
import DetailPage from "../pages/DetailPage";
import { Route, Routes, Link } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import { getUserLogged, putAccessToken } from "../utils/api";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LocaleProvider } from "../contexts/LocaleContext";
import { InfinitySpin } from "react-loader-spinner";

function NoteApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [locale, setLocale] = useState(() => {
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || "id";
  });

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  const toggleLocale = useCallback(() => {
    const newLocale = locale === "id" ? "en" : "id";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  }, [locale]);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setLoader(false);
    };
    getUser();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  const localeContext = {
    locale,
    toggleLocale,
  };

  if (authedUser === null) {
    return (
      <LocaleProvider value={localeContext}>
        <ThemeProvider value={{ theme, toggleTheme }}>
          <div className="app-container">
            <header>
              <h1>
                <Link to="/">
                  {localeContext.locale === "id"
                    ? "Aplikasi Catatan"
                    : "Note App"}
                </Link>
              </h1>
              <Navigation logout={null} name={null} />
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />}></Route>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
  return (
    <LocaleProvider value={localeContext}>
      <ThemeProvider value={{ theme, toggleTheme }}>
        <div className="app-container">
          <header>
            <h1>
              <Link to="/">
                {localeContext.locale === "id"
                  ? "Aplikasi Catatan"
                  : "Note App"}
              </Link>
            </h1>
            <Navigation logout={onLogout} name={authedUser.name} />
          </header>
          <main>
            {loader ? (
              <div className="loader">
                <InfinitySpin
                  visible={true}
                  width="200"
                  color="#3FC1C9"
                  ariaLabel="infinity-spin-loading"
                />
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddPage />} />
                <Route path="/archive" element={<ArchivedPage />} />
                <Route path="/notes/:id" element={<DetailPage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            )}
          </main>
        </div>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default NoteApp;
