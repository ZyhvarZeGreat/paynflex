import axios, { AxiosError } from "axios";
import axiosInstance from "../api/axios";

interface ApiError {
  message: string;
  status: number;
}

export const getTransactions = async () => {
  try {
    const response = await axiosInstance.get("/v1/auth/admin/trx-stat");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message:
            axiosError.response.data.message || "Failed to fetch transactions",
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
      message: "An unexpected error occurred while fetching transactions",
      status: 500,
    };
  }
};

export const getTransactionByTimeFrame = async (timeFrame: string) => {
  try {
    const response = await axiosInstance.get(
      `/v1/auth/admin/trx-stat/${timeFrame}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message:
            axiosError.response.data.message || "Failed to fetch transaction",
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
      message: "An unexpected error occurred while fetching transaction",
      status: 500,
    };
  }
};
