import axiosInstance from "@/api/axios";
import axios, { AxiosError } from "axios";
export interface BusinessData {
  _id?: string | undefined;
  name: string;
  category: {
    _id?: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  };
  address: string;
  description: string;
  images?: string;
  image: File | null;
  phoneNumber?: string;
  email?: string;
  website?: string;
  createdAt?: string;
  deleteAt?: Date;
  operatingHours?: Record<string, string>;
}

interface ApiError {
  message: string;
  status: number;
}

export const createBusiness = async (data: FormData) => {
  console.log("Business Data", data);
  try {
    const response = await axiosInstance.post(
      "https://paynflex-k360.onrender.com/v1/business",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message:
            axiosError.response.data.message || "Failed to create business",
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
      message: "An unexpected error occurred while creating business",
      status: 500,
    };
  }
};

export const getAllBusinesses = async () => {
  try {
    const response = await axiosInstance.get(
      "https://paynflex-k360.onrender.com/v1/business"
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message:
            axiosError.response.data.message || "Failed to fetch businesses",
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
      message: "An unexpected error occurred while fetching businesses",
      status: 500,
    };
  }
};

export const getBusinessById = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `https://paynflex-k360.onrender.com/business/${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message:
            axiosError.response.data.message || "Failed to fetch business",
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
      message: "An unexpected error occurred while fetching business",
      status: 500,
    };
  }
};

export const updateBusiness = async (
  id: string,
  data: Partial<BusinessData>
) => {
  try {
    const updateData: Partial<BusinessData> = {
      name: data.name,
      description: data.description,
      address: data.address,
      category: data.category,
      phoneNumber: data.phoneNumber,
      email: data.email,
      website: data.website,
      image: data.image,
    };

    const response = await axiosInstance.put(
      `https://paynflex-k360.onrender.com/v1/business/${id}`,
      updateData,
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
        throw {
          message:
            axiosError.response.data.message || "Failed to update business",
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
      message: "An unexpected error occurred while updating business",
      status: 500,
    };
  }
};

export const deleteBusiness = async (id: string) => {
  try {
    const response = await axiosInstance.delete(
      `https://paynflex-k360.onrender.com/v1/business/${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message:
            axiosError.response.data.message || "Failed to delete business",
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
      message: "An unexpected error occurred while deleting business",
      status: 500,
    };
  }
};
