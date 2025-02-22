import axios, { AxiosError } from "axios";
import axiosInstance from "../api/axios";

interface ApiError {
  message: string;
  status: number;
}

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get("/v1/auth/admin/user-stat");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message: axiosError.response.data.message || "Failed to fetch users",
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
      message: "An unexpected error occurred while fetching users",
      status: 500,
    };
  }
};

export const getUsersList = async () => {
  try {
    const response = await axiosInstance.get("/v1/auth/admin/list");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message:
            axiosError.response.data.message || "Failed to fetch users list",
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
      message: "An unexpected error occurred while fetching users list",
      status: 500,
    };
  }
};

export const updateUsers = async (userId: string, userData: any) => {
  try {
    const response = await axiosInstance.patch(
      `/v1/auth/admin/update-role/${userId}`,
      userData
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message: axiosError.response.data.message || "Failed to update user",
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
      message: "An unexpected error occurred while updating user",
      status: 500,
    };
  }
};

export const deleteUsersList = async (userId: string) => {
  try {
    const response = await axiosInstance.delete(
      `/v1/auth/admin/update-role/${userId}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message: axiosError.response.data.message || "Failed to delete user",
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
      message: "An unexpected error occurred while deleting user",
      status: 500,
    };
  }
};
