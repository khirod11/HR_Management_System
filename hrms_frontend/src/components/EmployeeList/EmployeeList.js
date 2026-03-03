import React from "react";
import { FaTrash } from "react-icons/fa";
import "./EmployeeList.css";
import API from "../../api/api";

function EmployeeList({ employees, refreshEmployees }) {

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      await API.delete(`employees/${id}/`);
      refreshEmployees();
    }
  };

  return (
    <div className="employee-list-card">
      {/* Header */}
      <div className="list-header">
        <h3>All Employees</h3>
      </div>

      {/* Table */}
      <table className="employee-table">
        <thead>
          <tr>
            <th>EMPLOYEE</th>
            <th>ROLE & DEPT</th>
            <th>STATUS</th>
            <th>JOINED DATE</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty-state">
                No employees found.
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp.id}>
                {/* Employee Info */}
                <td>
                  <div className="employee-info">
                    <div className="avatar">
                      {emp.full_name.charAt(0)}
                    </div>
                    <div>
                      <div className="emp-name">{emp.full_name}</div>
                      <div className="emp-email">{emp.email}</div>
                    </div>
                  </div>
                </td>

                {/* Role & Department */}
                <td>
                  <div className="role-text">
                    {emp.department}
                    <div className="dept-subtext">
                      {emp.employee_id}
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td>
                  <span className="status-badge active">
                    Active
                  </span>
                </td>

                {/* Joined Date */}
                <td>
                  {new Date().toLocaleDateString()}
                </td>

                {/* Actions */}
                <td>
                  <div className="action-buttons">
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(emp.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Footer */}
      <div className="table-footer">
        <span>
          Showing {employees.length} employees
        </span>

        <div className="pagination">
          <button disabled>Previous</button>
          <button disabled>Next</button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;