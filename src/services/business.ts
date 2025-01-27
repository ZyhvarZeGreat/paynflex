import axiosInstance from "@/api/axios";
import axios, { AxiosError } from "axios";
export interface BusinessData {
  _id?: string | undefined;
  name: string;
  category: string;
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

export const createBusiness = async (data: BusinessData) => {
  console.log("Business Data", data);
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("address", data.address);
    formData.append("category", data.category);
    if (data?.deleteAt) {
      formData.append("deleteAt", data?.deleteAt.toISOString());
    }
    if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    const response = await axiosInstance.post(
      "https://paynflex-k360.onrender.com/v1/business",
      formData,
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
    const formData = new FormData();

    // Append all non-null fields to formData
    if (data.name) formData.append("name", data.name);
    if (data.description) formData.append("description", data.description);
    if (data.address) formData.append("address", data.address);
    if (data.category) formData.append("category", data.category);
    if (data.phoneNumber) formData.append("phoneNumber", data.phoneNumber);
    if (data.email) formData.append("email", data.email);
    if (data.website) formData.append("website", data.website);

    // Handle image update if provided
    if (data?.image instanceof File) {
      formData.append("image", data.image);
    }

    const response = await axiosInstance.put(
      `https://paynflex-k360.onrender.com/v1/business/${id}`,
      formData,
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
