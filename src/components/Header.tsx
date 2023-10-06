import React from "react";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">어바웃</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
