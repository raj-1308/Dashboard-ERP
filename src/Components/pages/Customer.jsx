import "../../styles/customer.css";
import { motion } from "framer-motion";

const customers = [
  {
    name: "Rohit Sharma",
    age: 32,
    location: "Mumbai, India",
    type: "Bulk Buyer",
    orders: 18,
    spend: "₹2,40,000",
    lastPurchase: "12 Mar 2026",
    status: "VIP",
    source: "Website",
  },
  {
    name: "Amit Verma",
    age: 28,
    location: "Delhi, India",
    type: "Retail",
    orders: 5,
    spend: "₹45,000",
    lastPurchase: "5 Mar 2026",
    status: "Active",
    source: "Instagram Ads",
  },
  {
    name: "Karan Patel",
    age: 40,
    location: "Ahmedabad, India",
    type: "Dealer",
    orders: 30,
    spend: "₹5,20,000",
    lastPurchase: "15 Mar 2026",
    status: "VIP",
    source: "Referral",
  },
];

export default function Customer() {
  return (
    <div className="customer-page">
      <div className="customer-header">
        <h1>Customer Intelligence</h1>
        <p>Track and analyze your buyers efficiently</p>
      </div>

      <div className="customer-grid">
        {customers.map((cust, index) => (
          <motion.div
            key={index}
            className="customer-card"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            {/* Avatar */}
            <div className="customer-avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="avatar"
              />
            </div>

            {/* Name */}
            <h2>{cust.name}</h2>
            <span className="customer-type">{cust.type}</span>

            {/* Info */}
            <div className="customer-info">
              <p><strong>Age:</strong> {cust.age}</p>
              <p><strong>Location:</strong> {cust.location}</p>
              <p><strong>Orders:</strong> {cust.orders}</p>
              <p><strong>Spend:</strong> {cust.spend}</p>
              <p><strong>Last Purchase:</strong> {cust.lastPurchase}</p>
              <p><strong>Source:</strong> {cust.source}</p>
            </div>

            {/* Status Badge */}
            <div className={`status ${cust.status.toLowerCase()}`}>
              {cust.status}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}