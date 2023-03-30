import { ROUTES } from "utils/constants";
import { Admin } from "pages/Admin";
import { Basket } from "pages/Basket";
import { Shop } from "pages/Shop";
import { Auth } from "pages/Auth";
import { Device } from "pages/Device";

export const authRoutes = [
	{
		path: ROUTES.ADMIN,
		Component: Admin,
	},
	{
		path: ROUTES.BASKET,
		Component: Basket,
	},
];

export const publicRoutes = [
	{
		path: ROUTES.SHOP,
		Component: Shop,
	},
	{
		path: ROUTES.LOGIN,
		Component: Auth,
	},
	{
		path: ROUTES.REGISTRATION,
		Component: Auth,
	},
	{
		path: ROUTES.DEVICE + "/:id",
		Component: Device,
	},
];
