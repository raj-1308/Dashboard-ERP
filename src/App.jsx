import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Layout from "./Components/layout/Layout";

import Dashboard from "./Components/pages/Dashboard";
import Leads from "./Components/pages/Leads";
import Reports from "./Components/pages/Reports";
import Settings from "./Components/pages/Settings";

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
          
        </Route>
        <Route path="/settings" element={<Settings />} />


      </Routes>
    </BrowserRouter>
  );
}
