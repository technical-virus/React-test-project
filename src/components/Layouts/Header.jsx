import React from "react";
import hamburger from "./images/hamburger.svg";
import logo from "./images/logo.svg";
import user from "./images/user-1.jpg";
const Header = () => {
    const showHideSidebar = ()=>{
        var element = document.getElementById("mySidenav");
        var main = document.getElementById("main");
        element.classList.toggle("l-280");
        main.classList.toggle("mstrt-0");
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white nav-fixed p-0">
        <div className="container-fluid nav-box">
          <div className="col-lg-15 logo-outer">
            <a className="navbar-brand" href="/">
              <img src={logo} className="img-fluid logo-img" alt="logo image" />
            </a>
          </div>
          <div className="col-lg-70">
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={showHideSidebar}
            >
              <img src={hamburger} className="hamburger-img" />
            </span>
          </div>
          <div>Hello</div>
          <div className="col-lg-15 d-flex justify-content-end user-col">
            <div className="dropdown ms-2 me-4">
              <span
                className="btn-nav dropdown-toggle ps-4 pe-4 user-dropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <img src={user} className="user-img" />
                </span>
                <span>Jhon Doe</span>
              </span>
              <ul className="dropdown-menu min-w-120">
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Edit profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
