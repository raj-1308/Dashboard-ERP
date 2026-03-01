import FiltersPanel from "../Dashboard/FiltersPanel";
import "./Header.css";

export default function Header() {
  return (
    <header className="erp-header">
      
      {/* Top Row */}
      <div className="header-top">
        <div className="header-left">
          <h2 className="page-title">Admin Dashboard</h2>
          <span className="page-subtitle">Admin Panel</span>
        </div>

        <div className="header-center">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="header-right">
          <div className="user-info">
            <span className="user-name">Admin</span>
            <span className="user-role">HR Manager</span>
          </div>
        </div>
      </div>

      {/* Bottom Row - Filters */}
      <div className="header-filters">
        <FiltersPanel />
      </div>

    </header>
    
  );
}
