import "./ReportFilters.css";

export default function ReportFilters() {
  return (
    <div className="report-filters">

      <div className="filter-group">
        <label>Date Range</label>
        <select>
          <option>Today</option>
          <option>Last 7 Days</option>
          <option>Last 1 Month</option>
          <option>Last 1 Year</option>
          <option>Last 5 Years</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Product</label>
        <select>
          <option>All Products</option>
          <option>Sofa Set</option>
          <option>Dining Table</option>
          <option>Office Chair</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Executive</label>
        <select>
          <option>All Executives</option>
          <option>Rahul Sharma</option>
          <option>Neha Verma</option>
          <option>Amit Singh</option>
        </select>
      </div>

      <button className="export-btn">Export Report</button>

    </div>
  );
}
