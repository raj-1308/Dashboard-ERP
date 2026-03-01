import "../../styles/Reports.css";
import ExecutiveReportTable from "../Reports/ExecutiveReportTable";

import ProductReportTable from "../Reports/ProductReportTable";
import ReportFilters from "../Reports/ReportFilters";
import ReportKpiCards from "../Reports/ReportKpiCards";
import SalesChart from "../Reports/SalesChart";

export default function Reports() {
  return (
    <div className="reports-page">

      {/* Title Section */}
      <div className="reports-header">
        <h2 className="reports-title">Reports & Analytics</h2>
        <p className="reports-subtitle">
          Track product sales, revenue, profit, losses and executive performance.
        </p>
      </div>

      {/* Filters */}
      <ReportFilters/>

      {/* KPI Cards */}
      <ReportKpiCards/>      

      {/* Sales Chart */}
      <SalesChart/>

      {/* Product Report */}
      <ProductReportTable/>

      {/* Executive Report */}
      <ExecutiveReportTable/>

    </div>
  );
}
