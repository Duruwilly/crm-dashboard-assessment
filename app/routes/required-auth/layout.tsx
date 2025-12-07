import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { LocalStorageHelpers } from "~/lib/helpers/local-storage-helpers";
import { LocalStorageKeys } from "~/lib/constants/app";
import { APP_ROUTES } from "~/lib/constants/app-routes";
import { LoaderCircle } from "lucide-react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const getUser = LocalStorageHelpers.get(LocalStorageKeys.user_data);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!getUser) {
      navigate(APP_ROUTES.HOME);
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

  if (!getUser) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full flex">
        <Sidebar />
        <div
          style={{}}
          className="flex flex-col w-full min-[950px]:w-[79%] bg-[#fafbff]"
        >
          <Navbar />
          <div className="flex flex-col gap10 min-[950px]:px-15 h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
