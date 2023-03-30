import { TypeType, BrandType, DeviceType } from "types";

export type UserStoreType = {
	isAuth: boolean;
	user: any;
	setIsAuth: (isAuth: boolean) => void;
};

export type DeviceStoreType = {
	types: TypeType[];
	brands: BrandType[];
	devices: DeviceType[];
	selectedType: TypeType;
	selectedBrand: BrandType;
	setSelectedType: (type: TypeType) => void;
	setSelectedBrand: (brand: BrandType) => void;
};
