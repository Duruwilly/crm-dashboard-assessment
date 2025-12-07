import { useNavigate } from "react-router";
import { LocalStorageKeys } from "../constants/app";
import { LocalStorageHelpers } from "../helpers/local-storage-helpers";
import { APP_ROUTES } from "../constants/app-routes";

export const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    LocalStorageHelpers.remove(LocalStorageKeys.user_data);
    navigate(APP_ROUTES.HOME);
  };

  return { handleLogout };
};
