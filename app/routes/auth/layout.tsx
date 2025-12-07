import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { LocalStorageKeys } from "~/lib/constants/app";
import { APP_ROUTES } from "~/lib/constants/app-routes";
import { LocalStorageHelpers } from "~/lib/helpers/local-storage-helpers";

const AuthLayout = () => {
  const navigate = useNavigate();
  const getUser = LocalStorageHelpers.get(LocalStorageKeys.user_data);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (getUser) {
      navigate(APP_ROUTES.PRODUCT);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsChecking(false);
    }
  }, []);

  if (isChecking) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <LoaderCircle className="h-10 w-10 animate-spin text-brand-primary" />
      </div>
    );
  }

  if (getUser) {
    return null;
  }

  return (
    <div className="w-full h-screen flex lg:flex-row flex-col">
      <div className="w-full lg:max-w-[50%] h-screen bg-white z-20 px-[50px] py-20 overflow-y-auto">
        <div className="w-[90%] max-w[342px] mx-auto mb-8 lg:mb-24 flex flex-col">
          {/*  */}
          <Outlet />
        </div>
      </div>

      <div className="w-full lg:max-w-[50%] p-2 hscreen relative bg-black-400">
        {/*  */}
      </div>
    </div>
  );
};

export default AuthLayout;
