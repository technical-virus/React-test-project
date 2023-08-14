import React from "react";
import { Link,NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="row">
        <div id="mySidenav" className="sidenav ps-0 pe-0">
          <div className="outer-menu-sidebar">
            <ul className="list-unstyle mt-4">
              <li className="mt-3">
                <NavLink to="/super-admin">
                  <i className="fa-solid fa-house"></i>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              
              <li
                className="nav-item mt-3 dropdown-li"
                data-bs-target="#clientMenu"
                data-bs-toggle="collapse"
                id="submenu-li"
              >
                <a className="nav-link align-middle">
                  <i className="fa-solid fa-file-lines"></i>
                  <span className="ms-2">Client Management</span>
                </a>
                <i className="fa-solid fa-chevron-down" id="submenu-down"></i>
              </li>

              <div id="clientMenu" className="collapse sidebar-submenu">
                <ul className="nav flex-column submenu-ul">
                  <li className="w-100">
                    <NavLink to="/super-admin/pending-approval" className="nav-link px-0">
                      <i className="fa-solid fa-gauge"></i>
                      <span className=""> Pending Approval </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/super-admin/current-client" className="nav-link px-0">
                      <i className="fa-regular fa-rectangle-list"></i>
                      <span className="">Current Clients</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/super-admin/add-client" className="nav-link px-0">
                      <i className="fa-regular fa-rectangle-list"></i>
                      <span className="">Add Client</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <li
                className="nav-item mt-3 dropdown-li"
                data-bs-target="#productMgnt"
                data-bs-toggle="collapse"
                id="submenu-li"
              >
                <a className="nav-link align-middle">
                  <i className="fa-solid fa-file-lines"></i>
                  <span className="ms-2">Product Management</span>
                </a>
                <i className="fa-solid fa-chevron-down" id="submenu-down"></i>
              </li>

              <div id="productMgnt" className="collapse sidebar-submenu">
                <ul className="nav flex-column submenu-ul">
                  <li className="w-100">
                    <NavLink to="/super-admin/products" className="nav-link px-0">
                      <i className="fa-solid fa-gauge"></i>
                      <span className=""> All Products</span>
                    </NavLink>
                  </li>
                  
                </ul>
              </div>
              <li
                className="nav-item mt-3 dropdown-li"
                data-bs-target="#submenu2"
                data-bs-toggle="collapse"
                id="submenu-li"
              >
                <a className="nav-link align-middle">
                  <i className="fa-solid fa-file-lines"></i>
                  <span className="ms-2">User Managemet</span>
                </a>
                <i className="fa-solid fa-chevron-down" id="submenu-down"></i>
              </li>

              <div id="submenu2" className="collapse sidebar-submenu">
                <ul className="nav flex-column submenu-ul">
                  <li className="w-100">
                    <a href="#" className="nav-link px-0">
                      <i className="fa-solid fa-gauge"></i>
                      <span className=""> History</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0">
                      <i className="fa-regular fa-rectangle-list"></i>
                      <span className="">Product List</span>
                    </a>
                  </li>
                </ul>
              </div>

              <li className="mt-3">
                <a href="#">
                  <i className="fa-solid fa-industry"></i>
                  <span>Menufacturer</span>
                </a>
              </li>
              <li className="mt-3">
                <a href="#">
                  <i className="fa-solid fa-gear"></i>
                  <span>Implement Types</span>
                </a>
              </li>
              <li className="mt-3">
                <a href="#">
                  <i className="fa-solid fa-file-pen"></i>
                  <span>Implement Models</span>
                </a>
              </li>
              <li className="mt-3">
                <a href="#">
                  <i className="fa-solid fa-rectangle-list"></i>
                  <span>Category List</span>
                </a>
              </li>
              <li className="mt-3">
                <a href="#">
                  <i className="fa-regular fa-rectangle-list"></i>
                  <span>Item List</span>
                </a>
              </li>
            </ul>

            <div className="user-col user-col-sidebar">
              <div className="dropdown">
                <span
                  className="btn-nav dropdown-toggle user-dropdown"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>
                    <img src="images/user-1.jpg" className="user-img" />
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
