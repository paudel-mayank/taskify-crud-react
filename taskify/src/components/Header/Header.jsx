import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <div className="container-fluid navbar bg-warning">
        <div className="container py-1 ">
          <Link to="/" className="title">
            TASKIFY
          </Link>
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/" className="nav-item link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
