import axiosInstance from "@/api/axios";
import axios, { AxiosError } from "axios";

export interface PointSettingsData {
  point: number | undefined;
  value: number | undefined;
  threshold: number | undefined;
}

interface ApiError {
  message: string;
  status: number;
}

export const updatePointSettings = async (data: PointSettingsData) => {
  try {
    const response = await axiosInstance.post(
      "https://paynflex-k360.onrender.com/v1/point-settings",
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
          message: axiosError.response.data.message || "Update failed",
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
      message: "An unexpected error occurred during update",
      status: 500,
    };
  }
};

export const getPoints = async () => {
  try {
    const response = await axiosInstance.get(
      "https://paynflex-k360.onrender.com/v1/points",
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
          message: axiosError.response.data.message || "Failed to fetch points",
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
      message: "An unexpected error occurred while fetching points",
      status: 500,
    };
  }
};
