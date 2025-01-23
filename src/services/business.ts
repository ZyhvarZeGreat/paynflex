import axios, { AxiosError } from "axios";

export interface BusinessData {
  name: string;
  description: string;
  address: string;
  image: File | null;
  images?: string;
  category: string;
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

    if (data.image instanceof File) {
      formData.append("image", data.image);
    }

    const response = await axios.post(
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
    const response = await axios.get(
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
    const response = await axios.get(
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
