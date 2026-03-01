import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="erp-sidebar">
      {/* Logo Section */}
      <div className="sidebar-logo">
        <div className="logo-icon">🏭</div>
        <span className="logo-text">FMU ERP</span>
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        <NavLink to="/dashboard" className="menu-item">
          <span className="menu-icon">📊</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/leads" className="menu-item">
          <span className="menu-icon">👥</span>
          <span>Leads</span>
        </NavLink>

        <NavLink to="/reports" className="menu-item">
          <span className="menu-icon">📑</span>
          <span>Reports</span>
        </NavLink>

        <NavLink to="/settings" className="menu-item">
          <span className="menu-icon">⚙️</span>
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="sidebar-logout">
       <a href="/Login"> <button className="logout-btn" >Logout </button></a>
      </div>
    </aside>
  );
}
