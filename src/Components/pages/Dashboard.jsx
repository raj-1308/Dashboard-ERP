import "../../styles/Dashboard.css";
import KpiCards from "../dashboard/KpiCards";

export default function Dashboard() {
  return (
    <div className="dashboard-page">

      <div>
        <h2 className="dashboard-title">Dashboard Overview</h2>
        <p className="dashboard-subtitle">
          Welcome back! Here’s what’s happening in your system today.
        </p>
      </div>

      <div className="dashboard-grid">

        <div className="dashboard-main">
          <div className="dashboard-kpi-section">
            <KpiCards />
          </div>

          <div className="dashboard-section">
            <h3 className="dashboard-section-title">Activity</h3>
            <p style={{ color: "#64748b" }}>
              Recent activity and performance charts will appear here.
            </p>
          </div>
        </div>

        <div className="dashboard-side">
          {/* ProfileCard comes here next */}
        </div>

      </div>
    </div>
  );
}
