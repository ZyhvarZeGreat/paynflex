import axiosInstance from "@/api/axios";
import axios, { AxiosError } from "axios";

export interface ProductData {
  name: string;
  price: number;
  category: string;
  image: File | null;
  images?: string;
  serviceProvider: string;
}

interface ApiError {
  message: string;
  status: number;
}

export const createProduct = async (data: ProductData) => {
  console.log("Product Data", data);
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price.toString());
    formData.append("category", data.category);
    formData.append("serviceProvider", data.serviceProvider);
    if (data.image) {
      formData.append("image", data.image);
    }

    const response = await axiosInstance.post(
      "https://paynflex-k360.onrender.com/v1/products",
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
            axiosError.response.data.message || "Failed to create product",
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
      message: "An unexpected error occurred while creating product",
      status: 500,
    };
  }
};

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get(
      "https://paynflex-k360.onrender.com/v1/products"
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      if (axiosError.response) {
        throw {
          message:
            axiosError.response.data.message || "Failed to fetch products",
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
      message: "An unexpected error occurred while fetching products",
      status: 500,
    };
  }
};

// export const getProductById = async (id: string) => {
//   try {
//     const response = await axiosInstance.get(
//       `https://paynflex-k360.onrender.com/product/`
//     );
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       const axiosError = error as AxiosError<ApiError>;
//       if (axiosError.response) {
//         throw {
//           message:
//             axiosError.response.data.message || "Failed to fetch product",
//           status: axiosError.response.status,
//         };
//       } else if (axiosError.request) {
//         throw {
//           message:
//             "No response from server. Please check your internet connection.",
//           status: 500,
//         };
//       }
//     }
//     throw {
//       message: "An unexpected error occurred while fetching product",
//       status: 500,
//     };
//   }
// };
