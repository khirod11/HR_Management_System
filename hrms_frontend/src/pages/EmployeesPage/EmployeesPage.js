import React, { useEffect, useState } from "react";
import API from "../../api/api";
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import "./EmployeesPage.css";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEmployees = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await API.get("employees/");
      setEmployees(res.data);
    } catch (err) {
      setError("Failed to load employees.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="employees-page">

      {/* HEADER SECTION */}
      <div className="page-header">
        <div>
          <h1>Employee Management</h1>
          <p className="subtitle">
            Overview of your workforce and administrative tools.
          </p>
        </div>
      </div>

      {/* EMPLOYEE FORM */}
      <EmployeeForm refreshEmployees={fetchEmployees} />

      {/* EMPLOYEE LIST SECTION */}
      <div className="list-section">
        {loading && <p className="state-text">Loading employees...</p>}
        {error && <p className="error-text">{error}</p>}
        {!loading && !error && (
          <EmployeeList
            employees={employees}
            refreshEmployees={fetchEmployees}
          />
        )}
      </div>
    </div>
  );
}

export default EmployeesPage;