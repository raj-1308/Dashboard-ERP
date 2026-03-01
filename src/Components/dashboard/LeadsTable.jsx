import { useEffect, useState } from "react";
import StatusBadge from "./StatusBadge";
import "./LeadsTable.css";

export default function LeadsTable() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const data = [
      { id: 1, name: "Aman", phone: "1234567890", email: "john@mail.com", status: "New" },
      { id: 2, name: "Nitin", phone: "9876543210", email: "alice@mail.com", status: "Contacted" },
      { id: 3, name: "Raj ", phone: "5551234567", email: "raj@mail.com", status: "Quoted" },
      { id: 4, name: "Maria", phone: "4445556666", email: "maria@mail.com", status: "Lost" }
    ];
    setLeads(data);
  }, []);

  return (
    <div className="leads-section">
      <div className="leads-header">
        <h3>Leads</h3>
        <span>{leads.length} Records</span>
      </div>

      <div className="table-card dark-table">
        <table>
          <thead>
            <tr>
              <th>Lead</th>
              <th>Phone</th>
              <th>Status</th>
              <th className="center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {leads.map(lead => (
              <tr key={lead.id}>
                <td>
                  <div className="lead-user">
                    <div className="avatar">{lead.name[0]}</div>
                    <div>
                      <strong>{lead.name}</strong>
                      <span>{lead.email}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <a href={`tel:${lead.phone}`} className="phone-link">
                    {lead.phone}
                  </a>
                </td>

                <td>
                  <StatusBadge status={lead.status} />
                </td>

                <td className="center actions">
                  <button className="btn-view">View</button>
                  <button className="btn-call">Call</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {leads.length === 0 && (
          <div className="empty-state">No leads found</div>
        )}
      </div>
    </div>
  );
}
