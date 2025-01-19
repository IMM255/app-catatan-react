import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";

function Navigation({ logout, name }) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/archive">Arsip</Link>
        </li>
        {logout && name ? (
          <li>
            <button onClick={logout}>
              {name}
              <FiLogOut />
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
