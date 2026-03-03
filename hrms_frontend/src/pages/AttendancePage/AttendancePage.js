import React, { useEffect, useState } from "react";
import API from "../../api/api";
import AttendanceForm from "../../components/AttendanceForm/AttendanceForm";
import AttendanceList from "../../components/AttendanceList/AttendanceList";
import { FaDownload } from "react-icons/fa";
import "./AttendancePage.css";

function AttendancePage() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAttendance = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await API.get("attendance/");
      setRecords(res.data);
    } catch {
      setError("Failed to load attendance records.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const handleExport = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(records, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "attendance.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="attendance-page">
      <div className="page-header">
        <div>
          <h1>Attendance Management</h1>
          <p className="subtitle">
            Track and monitor employee attendance records.
          </p>
        </div>

        <button className="export-btn" onClick={handleExport}>
          <FaDownload />
          Export List
        </button>
      </div>

      <AttendanceForm refreshAttendance={fetchAttendance} />

      <div className="list-section">
        {loading && <p className="state-text">Loading records...</p>}
        {error && <p className="error-text">{error}</p>}
        {!loading && !error && (
          <AttendanceList records={records} />
        )}
      </div>
    </div>
  );
}

export default AttendancePage;