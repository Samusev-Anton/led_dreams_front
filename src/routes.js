import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Device from "./pages/Device";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";

import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/const";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE,
    Component: Device,
  },

  {
    path: DEVICE_ROUTE + "/:id",
    Component: Device,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
