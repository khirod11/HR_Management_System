import axios from "axios";

const API = axios.create({
  baseURL: "https://hr-management-system-vg9v.onrender.com/api/", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;