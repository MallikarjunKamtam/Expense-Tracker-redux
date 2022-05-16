import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to="/">
          <div className="header-logo">
            EXPENSER <span> </span>
            <i className="fi fi-br-bank"></i>
          </div>
        </Link>

        <div className="github-link">
          <a target="_blank" href="https://github.com/MallikarjunKamtam">
            Follow me
          </a>
          <span> </span>
          <i className="fi fi-brands-github"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
