import "boxicons/css/boxicons.min.css";
import React, { useEffect, useState } from "react";
import logo from "./logo.jpg";
import "./sidebar.css";

const Sidebar = ({ isSidebarClosed, toggleSidebar }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`body ${isDarkMode ? "dark" : ""}`}>
      <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="" />
            </span>
            <div className="text logo-text">
              <span className="name">Codinglab</span>
              <span className="profession">Web developer</span>
            </div>
          </div>
          <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search Games..." />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <a href="http://www.google.com">
                  <i className="bx bx-home-alt bx-flashing-hover icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="http://www.google.com">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Revenue</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="http://www.google.com">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="http://www.google.com">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="http://www.google.com">
                  <i className="bx bx-heart icon"></i>
                  <span className="text nav-text">Likes</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="http://www.google.com">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Wallets</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li>
              <a href="http://www.google.com">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
            <li className="mode">
              <div className="sun-moon">
                <i
                  className={`bx ${isDarkMode ? "bx-sun" : "bx-moon"} icon`}
                ></i>
              </div>
              <span className="mode-text text">
                {isDarkMode ? "Light mode" : "Dark mode"}
              </span>
              <div className="toggle-switch" onClick={toggleDarkMode}>
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
