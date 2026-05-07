import axios from "axios";

const API = axios.create({
  baseURL: "https://ecom-backend-z0h8.onrender.com/api",
});

delete API.defaults.headers.common["Authorization"];

export default API;
