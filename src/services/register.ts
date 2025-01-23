import axios, { AxiosError } from "axios";

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  roleId: string;
}

interface ApiError {
  message: string;
  status: number;
}

export const register = async (data: RegisterData) => {
  try {
    const response = await axios.post(
      "https://paynflex-k360.onrender.com/v1/auth/admin/create",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
