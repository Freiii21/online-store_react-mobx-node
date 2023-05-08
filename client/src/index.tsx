import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppContextType } from "types";
import UserStore from "store/UserStore";
import DeviceStore from "store/DeviceStore";

export const AppContext = createContext<AppContextType | null>(null);
const appContextValue = {
	user: new UserStore(),
	device: new DeviceStore(),
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<AppContext.Provider value={appContextValue}>
			<App />
		</AppContext.Provider>
	</React.StrictMode>,
);
