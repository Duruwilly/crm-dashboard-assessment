import { Toast } from "~/config/toast";
import api from "~/lib/api-network";
import type { ProductdData } from "~/models/products";

interface queryParams {
  limit?: number;
  skip?: number;
}

export const useProductServices = () => {
  const getProducts = async (queryParams: queryParams) => {
    const searchParams = new URLSearchParams();

    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        searchParams.append(key, String(value));
      }
    });

    const url = `https://dummyjson.com/products?${searchParams.toString()}`;

    try {
      const response = await api.get(url);
      if (response.status === 200) {
        return response.data as ProductdData;
      } else {
        Toast.error("Failed to fetch products");
      }
    } catch (error) {
      Toast.error("Failed to fetch products");
      throw error;
    }
  };

  return {
    getProducts,
  };
};
