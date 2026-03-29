import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  User,
  Package,
  FileText,
  Truck,
  ShoppingCart,
  BarChart3,
  Settings
} from "lucide-react";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="erp-sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">FMU</div>
        <span className="logo-text">ERP</span>
      </div>

      <nav className="sidebar-menu">

        <div className="menu-section">Core</div>

        <NavLink to="/dashboard" className="menu-item">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/leads" className="menu-item">
          <Users size={18} />
          <span>Leads</span>
        </NavLink>

        <NavLink to="/customers" className="menu-item">
          <User size={18} />
          <span>Customers</span>
        </NavLink>

        <div className="menu-section">Sales</div>

        <NavLink to="/orders" className="menu-item">
          <Package size={18} />
          <span>Orders</span>
        </NavLink>

        <NavLink to="/invoices" className="menu-item">
          <FileText size={18} />
          <span>Invoices</span>
        </NavLink>

        <div className="menu-section">Inventory</div>

        <NavLink to="/inventory" className="menu-item">
          <Package size={18} />
          <span>Inventory</span>
        </NavLink>

        <NavLink to="/suppliers" className="menu-item">
          <Truck size={18} />
          <span>Suppliers</span>
        </NavLink>

        <NavLink to="/purchase" className="menu-item">
          <ShoppingCart size={18} />
          <span>Purchase</span>
        </NavLink>

        <div className="menu-section">Management</div>

        <NavLink to="/reports" className="menu-item">
          <FileText size={18} />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/analytics" className="menu-item">
          <BarChart3 size={18} />
          <span>Analytics</span>
        </NavLink>

        <div className="menu-section">System</div>

        <NavLink to="/settings" className="menu-item">
          <Settings size={18} />
          <span>Settings</span>
        </NavLink>

      </nav>

      <div className="sidebar-logout">
        <button className="logout-btn">Logout</button>
      </div>

    </aside>
  );
}