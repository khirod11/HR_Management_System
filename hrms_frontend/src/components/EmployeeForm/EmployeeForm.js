import React, { useState } from "react";
import API from "../../api/api";
import { FaUserPlus } from "react-icons/fa";
import "./EmployeeForm.css";

function EmployeeForm({ refreshEmployees }) {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await API.post("employees/", form);
      refreshEmployees();
      setForm({
        employee_id: "",
        full_name: "",
        email: "",
        department: "",
      });
    } catch (err) {
      setError("Employee already exists or invalid data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="employee-card">
      {/* LEFT SIDE IMAGE PANEL */}
      <div className="employee-image">
        <div className="overlay">
          <h2>Join the Team</h2>
          <p>Register a new team member instantly.</p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="employee-form-section">
        <h3>New Employee Details</h3>
        <p className="subtext">
          Fill in the professional profile to add them to the database.
        </p>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label>Employee ID</label>
            <input
              name="employee_id"
              value={form.employee_id}
              onChange={handleChange}
              placeholder="e.g. EMP001"
              required
            />
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="sarah.j@company.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="Engineering">Engineering</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          {error && <p className="error">{error}</p>}

          <div className="button-container">
            <button type="submit" disabled={loading}>
              <FaUserPlus />
              {loading ? " Registering..." : " Register Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;