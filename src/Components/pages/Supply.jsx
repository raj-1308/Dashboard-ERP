import { useState, useEffect } from "react";
import "../../styles/Supply.css";

export default function Suppliers() {
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const [form, setForm] = useState({
    name: "",
    contactPerson: "",
    phone: "",
    email: "",
    gst: "",
    material: "",
    payment: "",
    address: "",
  });

  const suppliers = [
    {
      name: "Sharma Woods",
      contact: "9876543210",
      material: "Wood",
      lastOrder: "12 Mar 2026",
      pending: "₹15,000",
      status: "Active",
    },
    {
      name: "SteelCraft",
      contact: "9123456780",
      material: "Hardware",
      lastOrder: "5 Mar 2026",
      pending: "₹0",
      status: "Active",
    },
  ];

  // Handle ESC key for modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedSupplier(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Form change handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler (for now just console)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Supplier:", form);
  };

  return (
    <div className="suppliers-full">
      
      {/* Header */}
      <div className="section-header">
        <h1 className="title">Suppliers Management</h1>
        <p className="subtitle">
          Manage vendors, payments & supply chain efficiently
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="cards">
        <div className="card glow">
          <h3>Total Suppliers</h3>
          <p>24</p>
        </div>
        <div className="card glow">
          <h3>Active</h3>
          <p>20</p>
        </div>
        <div className="card warning glow">
          <h3>Pending Payments</h3>
          <p>₹45K</p>
        </div>
        <div className="card glow">
          <h3>Recent Orders</h3>
          <p>12</p>
        </div>
      </div>

      {/* Add Supplier */}
      <div className="section">
        <div className="glass-card">
          <div className="section-title">
            <h2>Add Supplier</h2>
            <span>Fill details to register a new supplier</span>
          </div>

          <form className="form-grid" onSubmit={handleSubmit}>
            <input name="name" placeholder="Supplier Name" onChange={handleChange} />
            <input name="contactPerson" placeholder="Contact Person" onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="gst" placeholder="GST Number" onChange={handleChange} />
            <input name="material" placeholder="Material Type" onChange={handleChange} />
            <input name="payment" placeholder="Payment Terms (e.g. 30 days)" onChange={handleChange} />
            <textarea name="address" placeholder="Address" onChange={handleChange} />

            <button type="submit">Add Supplier</button>
          </form>
        </div>
      </div>

      {/* Supplier Table */}
      <div className="section">
        <div className="table-section">
          <div className="table-header">
            <h2>Supplier List</h2>
            <input placeholder="Search supplier..." />
          </div>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Material</th>
                <th>Last Order</th>
                <th>Pending</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {suppliers.map((s, i) => (
                <tr key={i} onClick={() => setSelectedSupplier(s)}>
                  <td>{s.name}</td>
                  <td>{s.contact}</td>
                  <td>{s.material}</td>
                  <td>{s.lastOrder}</td>
                  <td>{s.pending}</td>
                  <td className="available">{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {selectedSupplier && (
        <div
          className="modal"
          onClick={() => setSelectedSupplier(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            

            <h2>{selectedSupplier.name}</h2>

            <div className="modal-grid">
              <p><strong>Contact:</strong> {selectedSupplier.contact}</p>
              <p><strong>Material:</strong> {selectedSupplier.material}</p>
              <p><strong>Last Order:</strong> {selectedSupplier.lastOrder}</p>
              <p><strong>Pending:</strong> {selectedSupplier.pending}</p>
            </div>

            <button onClick={() => setSelectedSupplier(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}