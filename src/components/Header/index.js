import React from "react";
import { Link } from "react-router-dom";
import Search from "./../../components/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="header-block-left">
        <div className="logo">
          <Link to="/">
            <span className="logo__text">Movies</span>
          </Link>
        </div>
      </div>
      <div className="header-block-right">
        <Search />
      </div>
    </header>
  );
};

export default Header;
