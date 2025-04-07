import axios from "axios";

const SERVER_API_URL = "http://localhost:8000/api/v1";

export const axiosInstance = axios.create({
  baseURL: SERVER_API_URL,
});

// Set the Authorization header with the JWT token (from localStorage)
export const setAuthHeader = (token: string) => {
  if (token) {
    axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
};
