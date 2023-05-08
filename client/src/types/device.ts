export type DeviceType = {
	id: number;
	name: string;
	price: number;
	rating: number;
	img: string;
	info?: any[];
};
export type DevicesType = {
	count: number;
	rows: DeviceType[];
};

export type DeviceInfoType = {
	title: string;
	description: string;
	number: number;
};
