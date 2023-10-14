import "./sideBar.css";
import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="navbar">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/income"> Income</Link>
        </li>

        <li>
          <Link to="/expenses"> Expenses </Link>
        </li>

        <li>
          <Link to="/savings"> Savings </Link>
        </li>

        <li>
          <a
            href="https://github.com/kashifhussainpathan/finance-management/tree/main"
            target="_blank"
          >
            Github
          </a>
        </li>
      </nav>
    </div>
  );
};
