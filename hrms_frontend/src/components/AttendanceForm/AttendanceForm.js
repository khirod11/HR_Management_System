import React, { useEffect, useState } from "react";
import API from "../../api/api";
import { FaClipboardCheck } from "react-icons/fa";
// import attendanceImage from "../../assets/office.png"; 
import "./AttendanceForm.css";

function AttendanceForm({ refreshAttendance }) {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present",
  });

  useEffect(() => {
    API.get("employees/").then((res) => setEmployees(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("attendance/", form);
      refreshAttendance();
      setForm({ employee: "", date: "", status: "Present" });
    } catch {
      alert("Attendance already marked for this date.");
    }
  };

  return (
    <div className="attendance-card">

      {/* LEFT IMAGE SECTION */}
      <div
        className="attendance-image"
      >
        <div className="overlay">
          <h2>Mark Attendance</h2>
          <p>Record daily attendance for employees.</p>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="attendance-form-section">
        <h3>Attendance Details</h3>
        <p className="subtext">
          Select employee, date and attendance status.
        </p>

        <form onSubmit={handleSubmit} className="form-grid">

          <div className="form-group">
            <label>Employee</label>
            <select
              value={form.employee}
              onChange={(e) =>
                setForm({ ...form, employee: e.target.value })
              }
              required
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.full_name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </div>

          <div className="button-container">
            <button type="submit">
              <FaClipboardCheck />
              Mark Attendance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AttendanceForm;