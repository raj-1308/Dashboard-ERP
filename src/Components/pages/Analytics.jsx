import "../../styles/Analytics.css";
import { motion } from "framer-motion";

export default function Analytics() {
  return (
    <div className="analytics-page">
      
      {/* HEADER */}
      <div className="analytics-header">
        <h1>Sales Analytics</h1>
        <p>Track performance from daily to yearly insights</p>
      </div>

      {/* KPI CARDS */}
      <div className="analytics-kpi">
        {[
          { title: "Today's Sales", value: "₹24,500" },
          { title: "Monthly Revenue", value: "₹4,20,000" },
          { title: "Total Orders", value: "1,240" },
          { title: "Avg Order Value", value: "₹1,850" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="kpi-card"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <h3>{item.title}</h3>
            <h2>{item.value}</h2>
          </motion.div>
        ))}
      </div>

      {/* CHART SECTION */}
      <div className="analytics-charts">
        
        <motion.div 
          className="chart-card"
          whileHover={{ scale: 1.02 }}
        >
          <h3>Sales Trend</h3>
          <div className="chart-placeholder">Chart Here</div>
        </motion.div>

        <motion.div 
          className="chart-card"
          whileHover={{ scale: 1.02 }}
        >
          <h3>Customer Growth</h3>
          <div className="chart-placeholder">Chart Here</div>
        </motion.div>

      </div>

      {/* INSIGHTS */}
      <div className="analytics-insights">
        
        <div className="insight-card">
          <h3>Top Customers</h3>
          <ul>
            <li>Rohit Sharma — ₹2.4L</li>
            <li>Amit Verma — ₹1.2L</li>
            <li>Karan Patel — ₹5.2L</li>
          </ul>
        </div>

        <div className="insight-card">
          <h3>Top Products</h3>
          <ul>
            <li>Hot Wheels Mustang</li>
            <li>Ferrari Diecast</li>
            <li>Lamborghini Aventador</li>
          </ul>
        </div>

      </div>

    </div>
  );
}