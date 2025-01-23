import axios, { AxiosError } from "axios";

interface RoleData {
  name: string;
}

interface ApiError {
  message: string;
  status: number;
}

export const createRole = async (data: RoleData) => {
  try {
    const response = await axios.post(
      "https://paynflex-k360.onrender.com/v1/roles",
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
        throw {
          message: axiosError.response.data.message || "Failed to create role",
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
      message: "An unexpected error occurred while creating role",
      status: 500,
    };
  }
};

export const getRoles = async () => {
  try {
    const response = await axios.get(
      "https://paynflex-k360.onrender.com/v1/roles"
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message: axiosError.response.data.message || "Failed to fetch roles",
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
      message: "An unexpected error occurred while fetching roles",
      status: 500,
    };
  }
};

export const getRoleById = async (id: string) => {
  try {
    const response = await axios.get(
      `https://paynflex-k360.onrender.com/role/${id}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message: axiosError.response.data.message || "Failed to fetch role",
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
      message: "An unexpected error occurred while fetching role",
      status: 500,
    };
  }
};
