import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/", // Replace with Render URL in production
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;