import axios from "axios";

// Dynamically use the VITE_BACKEND_URL for both local and production
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Send cookies with the request
});
