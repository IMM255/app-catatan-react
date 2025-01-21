import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";
import ToggleTheme from "./ToggleTheme";
import { LocaleConsumer } from "../contexts/LocaleContext";

function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <>
            <button onClick={toggleLocale} className="toggle-locale">
              {locale === "id" ? "en" : "id"}
            </button>
            <ToggleTheme />
            {logout && name ? (
              <>
                <nav className="navigation">
                  <ul>
                    <li>
                      <Link to="/archive">Arsip</Link>
                    </li>
                  </ul>
                </nav>
                <button onClick={logout} className="button-logout">
                  {name}
                  <FiLogOut />
                </button>
              </>
            ) : null}
          </>
        );
      }}
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
};

Navigation.defaultProps = {
  logout: null,
  name: null,
};

export default Navigation;
