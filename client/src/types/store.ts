import { TypeType, BrandType, DeviceType, UserType } from "types";

export type UserStoreType = {
	isAuth: boolean;
	user: UserType;
	setIsAuth: (isAuth: boolean) => void;
	setUser: (user: UserType) => void;
};

export type DeviceStoreType = {
	types: TypeType[];
	brands: BrandType[];
	devices: DeviceType[];
	selectedType: TypeType;
	selectedBrand: BrandType;
	currentPage: number;
	totalPages: number;
	itemsOnPage: number;
	setSelectedType: (type: TypeType) => void;
	setSelectedBrand: (brand: BrandType) => void;
	setTypes: (types: TypeType[]) => void;
	setBrands: (types: BrandType[]) => void;
	setDevices: (types: DeviceType[]) => void;
	setTotalPages: (totalPages: number) => void;
	setCurrentPage: (currentPage: number) => void;
};
