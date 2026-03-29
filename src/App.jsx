import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Layout from "./Components/layout/Layout";

import Dashboard from "./Components/pages/Dashboard";
import Leads from "./Components/pages/Leads";
import Reports from "./Components/pages/Reports";
import Settings from "./Components/pages/Settings";
import Customer from "./Components/pages/Customer";
import Analytics from "./Components/pages/Analytics"; 
import Inventory from "./Components/pages/Inventory";
import Suppliers from "./Components/pages/Supply";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ERP Layout */}
        <Route element={<Layout />}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/reports" element={<Reports />} />  
          <Route path="/suppliers" element={<Suppliers />} /> 
          
          
        </Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/inventory" element={<Inventory />} />


      </Routes>
    </BrowserRouter>
  );
}
