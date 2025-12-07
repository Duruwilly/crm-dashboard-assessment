import { useNavigate } from "react-router";
import { LocalStorageKeys } from "../constants/app";
import { LocalStorageHelpers } from "../helpers/local-storage-helpers";
import { APP_ROUTES } from "../constants/app-routes";
import { useState } from "react";

export const useLogout = ({ onClosePrompt }: { onClosePrompt: () => void }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    LocalStorageHelpers.remove(LocalStorageKeys.user_data);
    setTimeout(() => {
      setIsLoading(false);
      navigate(APP_ROUTES.HOME);
    }, 1000);
  };

  return { handleLogout, isLoading };
};
