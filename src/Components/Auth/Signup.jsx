import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    department: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully");
    navigate("/login");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="brand">
          <h2>Create Account</h2>
          <p>Register to access the portal</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="field">
            <input type="text" name="name" required onChange={handleChange} placeholder=" " />
            <label>Full Name</label>
          </div>

          <div className="field">
            <input type="email" name="email" required onChange={handleChange} placeholder=" " />
            <label>Email Address</label>
          </div>

          <div className="field">
            <input type="text" name="department" required onChange={handleChange} placeholder=" " />
            <label>Department</label>
          </div>

          <div className="field">
            <input type="password" name="password" required onChange={handleChange} placeholder=" " />
            <label>Password</label>
          </div>

          <div className="field">
            <input type="password" name="confirm" required onChange={handleChange} placeholder=" " />
            <label>Confirm Password</label>
          </div>

          <button type="submit" className="login-btn">
            Create Account
          </button>
        </form>

        <div className="footer">
          <span>Already have an account?</span>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
