import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import { APP_ROUTES } from "./lib/constants/app-routes";

export default [
  layout("routes/auth/layout.tsx", [index("routes/auth/login/index.tsx")]),

  layout("routes/required-auth/layout.tsx", [
    route(APP_ROUTES.PRODUCT, "routes/required-auth/products/index.tsx"),
    route(APP_ROUTES.CUSTOMERS, "routes/required-auth/customers/index.tsx"),
  ]),
] satisfies RouteConfig;
