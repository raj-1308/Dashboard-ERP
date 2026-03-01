import "./ExecutiveReportTable.css";

const executives = [
  { id: 1, name: "Rahul Sharma", leads: 120, closed: 48, revenue: 720000 },
  { id: 2, name: "Neha Verma", leads: 95, closed: 42, revenue: 640000 },
  { id: 3, name: "Amit Singh", leads: 140, closed: 50, revenue: 810000 },
  { id: 4, name: "Priya Mehta", leads: 80, closed: 26, revenue: 390000 },
];

export default function ExecutiveReportTable() {
  return (
    <div className="executive-report-card">

      <h3 className="executive-report-title">Executive Performance</h3>

      <table className="executive-report-table">
        <thead>
          <tr>
            <th>Executive</th>
            <th>Leads Handled</th>
            <th>Deals Closed</th>
            <th>Revenue (₹)</th>
            <th>Conversion %</th>
            <th>Performance</th>
          </tr>
        </thead>

        <tbody>
          {executives.map((item) => {
            const conversion = Math.round((item.closed / item.leads) * 100);

            let performance = "Average";
            if (conversion >= 40) performance = "Excellent";
            else if (conversion >= 30) performance = "Good";

            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.leads}</td>
                <td>{item.closed}</td>
                <td>₹ {item.revenue.toLocaleString()}</td>
                <td>{conversion}%</td>
                <td>
                  <span className={`exec-badge ${performance.toLowerCase()}`}>
                    {performance}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
}
