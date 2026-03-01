import "./ProductReportTable.css";
import { exportToExcel } from "./exportUtils";

const products = [
  { id: 1, name: "Luxury Sofa Set", units: 120, revenue: 480000, cost: 320000 },
  { id: 2, name: "Dining Table", units: 95, revenue: 285000, cost: 210000 },
  { id: 3, name: "Office Chair", units: 260, revenue: 390000, cost: 250000 },
  { id: 4, name: "Wardrobe", units: 60, revenue: 540000, cost: 470000 },
];

export default function ProductReportTable() {

  const exportData = products.map((item) => {
    const profit = item.revenue - item.cost;

    return {
      Product: item.name,
      "Units Sold": item.units,
      Revenue: item.revenue,
      Cost: item.cost,
      "Profit / Loss": profit,
      Status: profit >= 0 ? "Profit" : "Loss",
    };
  });

  return (
    <div className="product-report-card">

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 className="product-report-title">Product Performance</h3>

        <button
          className="export-excel-btn"
          onClick={() => exportToExcel(exportData, "Product_Report")}
        >
          Export Excel
        </button>
      </div>

      {/* YOUR TABLE BELOW THIS */}
    </div>
  );
}
