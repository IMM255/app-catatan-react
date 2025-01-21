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
import ToggleTheme from "./ToggleTheme";
import { LocaleProvider } from "../contexts/LocaleContext";

function NoteApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [locale, setLocale] = useState("id");
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  const toggleLocale = useCallback(() => {
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
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

  if (initializing) {
    return null;
  }

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
              <Link to="/">Aplikasi Catatan</Link>
            </h1>
            <Navigation logout={onLogout} name={authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/archive" element={<ArchivedPage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default NoteApp;
