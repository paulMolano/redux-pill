import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger text">
    
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to={'/'} className="nav-link font-weight-bold" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/search'} className="nav-link font-weight-bold" href="#">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/'} className="nav-link font-weight-bold" href="#">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/'} className="nav-link font-weight-bold" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
