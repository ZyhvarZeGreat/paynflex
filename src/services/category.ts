import axios, { AxiosError } from "axios";
import axiosInstance from "../api/axios";

// Rename and use existing CategoryData as request interface
export interface CategoryRequestData {
  name: string;
}

// New response interface based on the provided structure
export interface CategoryResponseData {
  name: string;
  _id: string;
}

interface ApiError {
  message: string;
  status: number;
}

export const createCategory = async (
  categoryData: Partial<CategoryRequestData>
): Promise<CategoryResponseData> => {
  const response = await axiosInstance.post("/v1/category", categoryData);
  return response.data;
};

export const getCategories = async (): Promise<CategoryResponseData[]> => {
  try {
    const response = await axiosInstance.get("/v1/category");
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message:
            axiosError.response.data.message || "Failed to fetch category",
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
      message: "An unexpected error occurred while fetching category",
      status: 500,
    };
  }
};

export const getCategoryById = async (
  id: string
): Promise<CategoryResponseData> => {
  try {
    const response = await axiosInstance.get(`/v1/category/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message:
            axiosError.response.data.message || "Failed to fetch category",
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
      message: "An unexpected error occurred while fetching category",
      status: 500,
    };
  }
};

export const updateCategory = async (
  categoryId: string,
  categoryData: Partial<CategoryRequestData>
): Promise<CategoryResponseData> => {
  const response = await axiosInstance.put(
    `/v1/category/${categoryId}`,
    categoryData
  );
  return response.data;
};

export const deleteCategory = async (categoryId: string): Promise<void> => {
  const response = await axiosInstance.delete(`/v1/category/${categoryId}`);
  return response.data;
};
