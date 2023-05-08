import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "components/AppRouter";
import { NavBar } from "components/NavBar";
import { observer } from "mobx-react";
import { AppContext } from "index";
import { AppContextType } from "types";
import { check } from "http/useAPI";
import { Spinner } from "react-bootstrap";

const App: React.FC = observer(() => {
	const { user } = useContext(AppContext) as AppContextType;
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		check()
			.then((data) => {
				user.setUser(data);
				user.setIsAuth(true);
			})
			.finally(() => setIsLoading(false));
	}, []);

	if (isLoading) {
		return <Spinner animation={"grow"} />;
	}
	return (
		<BrowserRouter>
			<NavBar />
			<AppRouter />
		</BrowserRouter>
	);
});

export default App;
