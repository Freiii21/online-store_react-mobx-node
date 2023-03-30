import React, { useContext } from "react";
import { AppContext } from "App";
import { AppContextType } from "types";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "utils/constants";
import { observer } from "mobx-react";

export const NavBar: React.FC = observer(() => {
	const { user } = useContext(AppContext) as AppContextType;
	const navigate = useNavigate();

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink style={{ color: "white" }} to={ROUTES.SHOP}>
					DeviceStore
				</NavLink>
				{user.isAuth ? (
					<Nav className="ml-auto" style={{ color: "white" }}>
						<Button variant={"outline-light"} onClick={() => navigate(ROUTES.ADMIN)}>
							Админ панель
						</Button>
						<Button variant={"outline-light"} className="ms-2" onClick={() => navigate(ROUTES.LOGIN)}>
							Выйти
						</Button>
					</Nav>
				) : (
					<Nav className="ml-auto" style={{ color: "white" }}>
						<Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>
							Авторизация
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	);
});
