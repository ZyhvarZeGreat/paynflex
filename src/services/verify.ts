import axios, { AxiosError } from "axios";

interface RequestOTP {
  identifier: string;
  method: string;
}

interface ApiError {
  message: string;
  status: number;
}

export const requestOTP = async (data: RequestOTP) => {
  try {
    const response = await axios.post(
      "https://paynflex.onrender.com/v1/auth/forget-password",
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
          message:
            axiosError.response.data.message || "Password reset request failed",
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
      message: "An unexpected error occurred during password reset request",
      status: 500,
    };
  }
};
