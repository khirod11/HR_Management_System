import React from "react";
import "./AttendanceList.css";

function AttendanceList({ records }) {
  return (
    <div className="attendance-list-card">
      <div className="list-header">
        <h3>Attendance Records</h3>
      </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>EMPLOYEE ID</th>
            <th>DATE</th>
            <th>STATUS</th>
          </tr>
        </thead>

        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="3" className="empty-state">
                No attendance records found.
              </td>
            </tr>
          ) : (
            records.map((rec) => (
              <tr key={rec.id}>
                <td>{rec.employee_name}</td>
                <td>{rec.date}</td>
                <td>
                  <span
                    className={`status-badge ${
                      rec.status === "Present"
                        ? "present"
                        : "absent"
                    }`}
                  >
                    {rec.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="table-footer">
        Showing {records.length} records
      </div>
    </div>
  );
}

export default AttendanceList;