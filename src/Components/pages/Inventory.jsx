import { useState } from "react";
import "../../styles/Inventory.css";

export default function Inventory() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "items":
        return (
          <div className="panel">
            <h1 className="title">Manage Items</h1>
            <div className="glass-card">
              <form className="form-grid">
                <input placeholder="Item Name" />
                <select>
                  <option>Raw Material</option>
                  <option>Finished Product</option>
                </select>
                <input placeholder="Quantity" />
                <input placeholder="Unit" />
                <input placeholder="Price" />
                <input placeholder="Supplier" />
                <textarea placeholder="Description" />
                <button>Add Item</button>
              </form>
            </div>
          </div>
        );

      case "categories":
        return (
          <div className="panel">
            <h1 className="title">Categories</h1>
            <div className="grid-cards">
              {["Raw Materials", "Hardware", "Finished", "Semi-Finished"].map(
                (c) => (
                  <div className="mini-card" key={c}>
                    {c}
                  </div>
                )
              )}
            </div>
          </div>
        );

      case "stockin":
        return (
          <div className="panel">
            <h1 className="title">Stock In</h1>
            <div className="glass-card">
              <form className="form-grid">
                <input placeholder="Item Name" />
                <input placeholder="Quantity Added" />
                <input placeholder="Supplier" />
                <input type="date" />
                <button>Add Stock</button>
              </form>
            </div>
          </div>
        );

      case "stockout":
        return (
          <div className="panel">
            <h1 className="title">Stock Out</h1>
            <div className="glass-card">
              <form className="form-grid">
                <input placeholder="Item Name" />
                <input placeholder="Quantity Used" />
                <input placeholder="Used For" />
                <input type="date" />
                <button>Remove Stock</button>
              </form>
            </div>
          </div>
        );

      case "alerts":
        return (
          <div className="panel">
            <h1 className="title">Low Stock Alerts</h1>
            <div className="alert-box">
              ⚠️ Plywood Sheet → Only 3 left
            </div>
          </div>
        );

      case "suppliers":
        return (
          <div className="panel">
            <h1 className="title">Suppliers</h1>
            <div className="glass-card">
              <form className="form-grid">
                <input placeholder="Supplier Name" />
                <input placeholder="Contact" />
                <input placeholder="Address" />
                <button>Add Supplier</button>
              </form>
            </div>
          </div>
        );

      default:
        return (
          <div className="dashboard">
            <h1 className="title">Inventory Dashboard</h1>

            <div className="cards">
              <div className="card glow">
                <h3>Total Items</h3>
                <p>120</p>
              </div>

              <div className="card warning glow">
                <h3>Low Stock</h3>
                <p>8</p>
              </div>

              <div className="card danger glow">
                <h3>Out of Stock</h3>
                <p>3</p>
              </div>

              <div className="card glow">
                <h3>Recently Added</h3>
                <p>12</p>
              </div>
            </div>

            <div className="table-section">
              <div className="table-header">
                <h2>Inventory Table</h2>
                <input placeholder="Search item..." />
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Qty</th>
                    <th>Unit</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Plywood</td>
                    <td>Raw</td>
                    <td>10</td>
                    <td>Sheets</td>
                    <td>₹1200</td>
                    <td className="low">Low</td>
                  </tr>
                  <tr>
                    <td>Chair</td>
                    <td>Finished</td>
                    <td>0</td>
                    <td>Piece</td>
                    <td>₹2500</td>
                    <td className="out">Out</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="inventory-container">
      {/* Sidebar */}
      <aside className="inventory-sidebar">
        <h2>Inventory</h2>
        <ul>
          {[
            "dashboard",
            "items",
            "categories",
            "stockin",
            "stockout",
            "alerts",
            "suppliers",
          ].map((tab) => (
            <li
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <main className="inventory-main">{renderContent()}</main>
    </div>
  );
}