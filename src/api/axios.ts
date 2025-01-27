import axios from "axios";

// Create a base axios instance
const axiosInstance = axios.create({
  baseURL: "https://paynflex-k360.onrender.com", // Adjust the base URL as needed
});

// Create a function to set the auth token
export const setAuthToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

export default axiosInstance;
