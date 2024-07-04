import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [isSidebarClosed, setSidebarClosed] = useState(true);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  return (
    <div
      className={`App ${
        isSidebarClosed ? "App-sidebar-close" : "App-sidebar-open"
      }`}
    >
      <Sidebar
        isSidebarClosed={isSidebarClosed}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
}

export default App;
