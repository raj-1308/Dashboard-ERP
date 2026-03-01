import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Settings.css";

export default function Settings() {
  const [tab, setTab] = useState("profile");
  const navigate = useNavigate();

  return (
    <div className="settings-page">

      {/* Back Button (Top Left) */}
      <button className="settings-back-btn" onClick={() => navigate("/dashboard")}>
        ← Back to Dashboard
      </button>

      {/* Settings Layout */}
      <div className="settings-wrapper">

        {/* Internal Sidebar */}
        <aside className="settings-nav">
          <h3>Settings</h3>

          <button className={tab === "profile" ? "active" : ""} onClick={() => setTab("profile")}>
            Profile
          </button>
          <button className={tab === "organization" ? "active" : ""} onClick={() => setTab("organization")}>
            Organization
          </button>
          <button className={tab === "users" ? "active" : ""} onClick={() => setTab("users")}>
            Users & Roles
          </button>
          <button className={tab === "security" ? "active" : ""} onClick={() => setTab("security")}>
            Security
          </button>
          <button className={tab === "appearance" ? "active" : ""} onClick={() => setTab("appearance")}>
            Appearance
          </button>
        </aside>

        {/* Content Area */}
        <main className="settings-content">
          {tab === "profile" && (
            <div className="settings-card">
              <h2>Profile Details</h2>
              <p>Manage your personal information</p>

              <div className="form-grid">
                <input placeholder="Full Name" />
                <input placeholder="Email Address" />
                <input value="Admin" disabled />
              </div>

              <button className="primary-btn">Save Changes</button>
            </div>
          )}

          {tab === "organization" && (
            <div className="settings-card">
              <h2>Organization</h2>
              <p>Company & system-level settings</p>

              <div className="form-grid">
                <input placeholder="Company Name" />
                <input placeholder="GST / Registration ID" />
                <input placeholder="Primary Contact" />
              </div>

              <button className="primary-btn">Update Organization</button>
            </div>
          )}

          {tab === "security" && (
            <div className="settings-card">
              <h2>Security</h2>
              <p>Password & access control</p>

              <div className="form-grid">
                <input type="password" placeholder="Current Password" />
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Confirm Password" />
              </div>

              <button className="primary-btn danger">Update Password</button>
            </div>
          )}

          {tab === "appearance" && (
            <div className="settings-card">
              <h2>Appearance</h2>
              <p>Customize dashboard look & feel</p>

              <div className="toggle-row">
                <span>Dark Mode</span>
                <input type="checkbox" checked readOnly />
              </div>

              <div className="toggle-row">
                <span>Compact Layout</span>
                <input type="checkbox" />
              </div>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
