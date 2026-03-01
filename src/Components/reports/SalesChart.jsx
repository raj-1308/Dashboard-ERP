import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "./SalesChart.css";
import { useState } from "react";

const dataSets = {
  week: [
    { name: "Mon", sales: 12000, profit: 3200 },
    { name: "Tue", sales: 15000, profit: 4100 },
    { name: "Wed", sales: 18000, profit: 5200 },
    { name: "Thu", sales: 14000, profit: 3800 },
    { name: "Fri", sales: 21000, profit: 6100 },
    { name: "Sat", sales: 24000, profit: 7200 },
    { name: "Sun", sales: 20000, profit: 6400 },
  ],

  month: [
    { name: "Week 1", sales: 80000, profit: 22000 },
    { name: "Week 2", sales: 95000, profit: 28000 },
    { name: "Week 3", sales: 110000, profit: 34000 },
    { name: "Week 4", sales: 125000, profit: 39000 },
  ],

  year: [
    { name: "Jan", sales: 320000, profit: 90000 },
    { name: "Feb", sales: 280000, profit: 75000 },
    { name: "Mar", sales: 360000, profit: 110000 },
    { name: "Apr", sales: 410000, profit: 135000 },
    { name: "May", sales: 390000, profit: 120000 },
    { name: "Jun", sales: 450000, profit: 150000 },
  ],

  fiveYears: [
    { name: "2021", sales: 2400000, profit: 680000 },
    { name: "2022", sales: 3100000, profit: 920000 },
    { name: "2023", sales: 4200000, profit: 1350000 },
    { name: "2024", sales: 5100000, profit: 1780000 },
    { name: "2025", sales: 6200000, profit: 2150000 },
  ],
};

export default function SalesChart() {
  const [range, setRange] = useState("week");

  return (
    <div className="sales-chart-card">

      <div className="sales-chart-header">
        <h3>Sales & Profit Overview</h3>

        <select value={range} onChange={(e) => setRange(e.target.value)}>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 1 Month</option>
          <option value="year">Last 1 Year</option>
          <option value="fiveYears">Last 5 Years</option>
        </select>
      </div>

      <div className="sales-chart-body">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={dataSets[range]}>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ 
                background: "#020617", 
                border: "1px solid #1e293b", 
                borderRadius: "8px",
                color: "#f8fafc"
              }} 
            />
            <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={3} />
            <Line type="monotone" dataKey="profit" stroke="#22c55e" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
