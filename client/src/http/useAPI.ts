import { $authHost, $host } from "http/index";

export const registration = async (email: string, password: string) => {
	const response = await $host.post("api/user/registration", { email, password, role: "ADMIN" });
	return response;
};

export const login = async (email: string, password: string) => {
	const response = await $host.post("api/user/login", { email, password });
	return response;
};

export const check = async () => {
	const response = await $host.post("api/user/check");
	return response;
};
