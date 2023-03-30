import { TypeType, BrandType, DeviceType } from "types";
import { makeAutoObservable } from "mobx";

export default class DeviceStore {
	private _types: TypeType[];
	private _brands: BrandType[];
	private _devices: DeviceType[];
	private _selectedType: TypeType;
	private _selectedBrand: BrandType;

	constructor() {
		this._types = [
			{ id: 1, name: "Холодильники" },
			{ id: 2, name: "Смартфоны" },
			{ id: 3, name: "Ноутбуки" },
			{ id: 4, name: "Телевизоры" },
		];
		this._brands = [
			{ id: 1, name: "Samsung" },
			{ id: 2, name: "Apple" },
			{ id: 3, name: "Lenovo" },
			{ id: 4, name: "Asus" },
		];
		this._devices = [
			{
				id: 1,
				name: "Iphone 12 pro",
				price: 25000,
				rating: 5,
				img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png",
			},
			{
				id: 2,
				name: "Iphone 12 pro_",
				price: 25000,
				rating: 5,
				img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png",
			},
			{
				id: 1,
				name: "Iphone 12 pro",
				price: 25000,
				rating: 5,
				img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png",
			},
			{
				id: 1,
				name: "Iphone 12 pro",
				price: 25000,
				rating: 5,
				img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png",
			},
			{
				id: 1,
				name: "Iphone 12 pro",
				price: 25000,
				rating: 5,
				img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png",
			},
			{
				id: 1,
				name: "Iphone 12 pro",
				price: 25000,
				rating: 5,
				img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png",
			},
			{
				id: 1,
				name: "Iphone 12 pro",
				price: 25000,
				rating: 5,
				img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png",
			},
			{
				id: 1,
				name: "Iphone 12 pro",
				price: 25000,
				rating: 5,
				img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png",
			},
		];
		this._selectedType = {} as TypeType;
		this._selectedBrand = {} as BrandType;
		makeAutoObservable(this);
	}

	setTypes(types: TypeType[]) {
		this._types = types;
	}
	setBrands(brands: BrandType[]) {
		this._brands = brands;
	}
	setDevices(devices: DeviceType[]) {
		this._devices = devices;
	}
	setSelectedType(type: TypeType) {
		this._selectedType = type;
	}
	setSelectedBrand(brand: BrandType) {
		this._selectedBrand = brand;
	}

	get types() {
		return this._types;
	}
	get brands() {
		return this._brands;
	}
	get devices() {
		return this._devices;
	}
	get selectedType() {
		return this._selectedType;
	}
	get selectedBrand() {
		return this._selectedBrand;
	}
}
