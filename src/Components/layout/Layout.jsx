import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./Layout.css";

export default function Layout() {
  const location = useLocation();

  const noHeaderRoutes = ["/suppliers", "/reports"];
  const hideHeader = noHeaderRoutes.includes(location.pathname);

  return (
    <div className="app-layout">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <main className="main-content">
        
        {/* Header */}
        {!hideHeader && <Header />}

        {/* Scrollable Page Area */}
        <div className="page-content">
          <Outlet />
        </div>

      </main>
    </div>
  );
}