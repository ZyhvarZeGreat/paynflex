import axios, { AxiosError } from "axios";
import axiosInstance from "../api/axios";

interface LoginData {
  password: string;
  phoneNumber: string;
}

interface ApiError {
  message: string;
  status: number;
}

export const login = async (data: LoginData) => {
  try {
    const response = await axiosInstance.post("/v1/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        // Server responded with error status
        throw {
          message: axiosError.response.data.message || "Registration failed",
          status: axiosError.response.status,
        };
      } else if (axiosError.request) {
        // Request made but no response received
        throw {
          message:
            "No response from server. Please check your internet connection.",
          status: 500,
        };
      }
    }
    // Generic error handling
    throw {
      message: "An unexpected error occurred during registration",
      status: 500,
    };
  }
};
