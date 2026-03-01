import "./ReportKpiCards.css";

export default function ReportKpiCards() {
  const stats = [
    { title: "Total Sales", value: "₹ 12,45,000", color: "blue" },
    { title: "Total Profit", value: "₹ 3,20,000", color: "green" },
    { title: "Total Loss", value: "₹ 85,000", color: "red" },
    { title: "Units Sold", value: "1,248", color: "purple" },
  ];

  return (
    <div className="report-kpi-row">
      {stats.map((item, index) => (
        <div className={`report-kpi-card ${item.color}`} key={index}>
          <div className="report-kpi-title">{item.title}</div>
          <div className="report-kpi-value">{item.value}</div>
          <div className="report-kpi-sub">This period</div>
        </div>
      ))}
    </div>
  );
}
