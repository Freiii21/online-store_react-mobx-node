import { makeAutoObservable } from "mobx";
import { UserType } from "types";

export default class UserStore {
	private _isAuth: boolean;
	private _user: object;

	constructor() {
		this._isAuth = true;
		this._user = {};
		makeAutoObservable(this);
	}

	setIsAuth(isAuth: boolean) {
		this._isAuth = isAuth;
	}

	setUser(user: UserType) {
		this._user = user;
	}

	get isAuth() {
		return this._isAuth;
	}

	get user() {
		return this._user;
	}
}
