import axios, { AxiosError } from "axios";

interface ApiError {
  message: string;
  status: number;
}

interface PasswordChangeData {
  currentPassword: string;
  newPassword: string;
}

export const changePassword = async (data: PasswordChangeData) => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    throw {
      message: "No authorization token found",
      status: 401,
    };
  }

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  try {
    const response = await axios.post(
      "https://paynflex-k360.onrender.com/v1/auth/admin/change-password",
      data
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message:
            axiosError.response.data.message || "Failed to change password",
          status: axiosError.response.status,
        };
      } else if (axiosError.request) {
        throw {
          message:
            "No response from server. Please check your internet connection.",
          status: 500,
        };
      }
    }
    throw {
      message: "An unexpected error occurred while changing password",
      status: 500,
    };
  }
};
