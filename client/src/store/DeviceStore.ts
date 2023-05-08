import { TypeType, BrandType, DeviceType } from "types";
import { makeAutoObservable } from "mobx";

export default class DeviceStore {
	private _types: TypeType[];
	private _brands: BrandType[];
	private _devices: DeviceType[];
	private _selectedType: TypeType;
	private _selectedBrand: BrandType;
	private _currentPage: number;
	private _totalPages: number;
	private _itemsOnPage: number;

	constructor() {
		this._types = [];
		this._brands = [];
		this._devices = [];
		this._selectedType = {} as TypeType;
		this._selectedBrand = {} as BrandType;
		this._currentPage = 1;
		this._totalPages = 0;
		this._itemsOnPage = 5;
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
		this.setCurrentPage(1);
		this._selectedType = type;
	}
	setSelectedBrand(brand: BrandType) {
		this.setCurrentPage(1);
		this._selectedBrand = brand;
	}
	setCurrentPage(currentPage: number) {
		this._currentPage = currentPage;
	}
	setTotalPages(totalPages: number) {
		this._totalPages = totalPages;
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
	get currentPage() {
		return this._currentPage;
	}
	get totalPages() {
		return this._totalPages;
	}
	get itemsOnPage() {
		return this._itemsOnPage;
	}
}
