import React, { useEffect, useState } from "react";
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

function NoteApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  useEffect(() => {
    const getUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };
    getUser();
  }, []);

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div className="app-container">
        <header>
          <h1>
            <Link to="/">Aplikasi Catatan</Link>
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
    );
  }
  return (
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
  );
}

export default NoteApp;
