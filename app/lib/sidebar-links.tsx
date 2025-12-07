import CustomersIcon from "~/assets/svg/icons/customers-icon";
import DashboardIcon from "~/assets/svg/icons/dashboard-icon";
import HelpIcon from "~/assets/svg/icons/help-icon";
import IncomeIcon from "~/assets/svg/icons/income-icon";
import ProductIcon from "~/assets/svg/icons/product-icon";
import PromoteIcon from "~/assets/svg/icons/promote-icon";
import { APP_ROUTES } from "~/lib/constants/app-routes";

export type SidebarLink = {
  path: string;
  icon: (props: IconType) => React.JSX.Element;
  title: string;
};

export const SidebarLinks: SidebarLink[] = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    path: APP_ROUTES.DASHBOARD,
  },
  {
    icon: ProductIcon,
    title: "Product",
    path: APP_ROUTES.PRODUCT,
  },
  {
    icon: CustomersIcon,
    title: "Customers",
    path: APP_ROUTES.CUSTOMERS,
  },
  {
    icon: IncomeIcon,
    title: "Income",
    path: APP_ROUTES.INCOME,
  },
  {
    icon: PromoteIcon,
    title: "Promote",
    path: APP_ROUTES.PROMOTE,
  },
  {
    icon: HelpIcon,
    title: "Help",
    path: APP_ROUTES.HELP,
  },
];
