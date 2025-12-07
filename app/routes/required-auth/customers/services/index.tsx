import { Toast } from "~/config/toast";
import api from "~/lib/api-network";
import type { Users } from "~/models/users";

export const useCustomersServices = () => {
  const getUsers = async () => {
    try {
      const response = await api.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.status === 200) {
        return response.data as Users[];
      } else {
        Toast.error("Failed to fetch users");
      }
    } catch (error) {
      Toast.error("Failed to fetch users");
      throw error;
    }
  };

  return {
    getUsers,
  };
};
