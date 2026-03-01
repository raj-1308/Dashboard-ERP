import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";

export default function Layout() {
  const location = useLocation();

  // Check if current page is Settings
  const isSettingsPage = location.pathname === "/settings";

  return (
    <div className={`app-layout ${isSettingsPage ? "settings-layout" : ""}`}>
      
      {/* Sidebar (hide on settings) */}
      {!isSettingsPage && <Sidebar />}

      {/* Main Area */}
      <div className="main-content">
        
        {/* Header (hide on settings) */}
        {!isSettingsPage && <Header />}

        {/* Page Content */}
        <div className="page-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
