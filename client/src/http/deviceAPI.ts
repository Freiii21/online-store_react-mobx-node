import { $authHost, $host } from "http/index";
import { BrandType, DevicesType, DeviceType, TypeType } from "types";

export const createType = async (name: string): Promise<TypeType> => {
	const { data } = await $authHost.post("api/type", { name });
	return data;
};

export const fetchTypes = async (): Promise<TypeType[]> => {
	const { data } = await $host.get("api/type");
	return data;
};

export const createBrand = async (name: string): Promise<BrandType> => {
	const { data } = await $authHost.post("api/brand", { name });
	return data;
};

export const fetchBrands = async (): Promise<BrandType[]> => {
	const { data } = await $host.get("api/brand");
	return data;
};

export const createDevice = async (device: FormData): Promise<DeviceType> => {
	const { data } = await $authHost.post("api/device", device);
	return data;
};

export const fetchDevices = async ({
	typeId,
	brandId,
	currentPage = 1,
	itemsOnPage,
}: {
	typeId: number | null;
	brandId: number | null;
	currentPage?: number;
	itemsOnPage: number;
}): Promise<DevicesType> => {
	const { data } = await $host.get("api/device", {
		params: {
			typeId,
			brandId,
			page: currentPage,
			limit: itemsOnPage,
		},
	});
	return data;
};

export const fetchOneDevice = async (id: string): Promise<DeviceType> => {
	const { data } = await $host.get("api/device/" + id);
	return data;
};
