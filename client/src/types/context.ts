import { DeviceStoreType, UserStoreType } from "types";

export type AppContextType = {
	user: UserStoreType;
	device: DeviceStoreType;
};
