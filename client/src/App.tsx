import React, { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "components/AppRouter";
import UserStore from "store/UserStore";
import DeviceStore from "store/DeviceStore";
import { AppContextType } from "types";
import { NavBar } from "components/NavBar";
import { Container } from "react-bootstrap";

export const AppContext = createContext<AppContextType | null>(null);

const App: React.FC = () => {
	const appContextValue = {
		user: new UserStore(),
		device: new DeviceStore(),
	};

	return (
		<AppContext.Provider value={appContextValue}>
			<BrowserRouter>
				<NavBar />
				<Container>
					<AppRouter />
				</Container>
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export default App;
