import "./KpiCards.css";

export default function KpiCards() {
  const stats = [
    { title: "Total Leads", value: 1280, color: "blue" },
    { title: "New Today", value: 42, color: "green" },
    { title: "Pending Follow-ups", value: 96, color: "yellow" },
    { title: "Converted Deals", value: 310, color: "purple" },
    { title: "Closed / Lost", value: 58, color: "red" }
  ];

  return (
    <div className="kpi-row">
      {stats.map((item, index) => (
        <div className={`kpi-card ${item.color}`} key={index}>
          <div className="kpi-title">{item.title}</div>
          <div className="kpi-value">{item.value}</div>
          <div className="kpi-trend">Updated today</div>
        </div>
      ))}
    </div>
  );
}
