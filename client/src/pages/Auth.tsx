import React, { useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "utils/constants";
import { login, registration } from "http/useAPI";
import { observer } from "mobx-react";
import { AppContext } from "index";
import { AppContextType, UserType } from "types";

export const Auth: React.FC = observer(() => {
	const { user } = useContext(AppContext) as AppContextType;
	const location = useLocation();
	const navigate = useNavigate();
	const isLogin = location.pathname === ROUTES.LOGIN;

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const onAuthorizationClick = async () => {
		try {
			let data: UserType;
			if (isLogin) {
				data = await login(email, password);
			} else {
				data = await registration(email, password);
			}
			user.setUser(data);
			user.setIsAuth(true);
			navigate(ROUTES.SHOP);
		} catch (error: any) {
			alert(error.response.data.message);
		}
	};

	return (
		<Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
			<Card style={{ width: 600 }} className="p-5">
				<h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
				<Form className="d-flex flex-column">
					<Form.Control
						placeholder="Введите email..."
						className="mt-3"
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
					/>
					<Form.Control
						placeholder="Введите пароль..."
						className="mt-3"
						value={password}
						onChange={(e) => setPassword(e.currentTarget.value)}
						type="password"
					/>
					<div className="d-flex justify-content-between mt-3">
						{isLogin ? (
							<NavLink to={ROUTES.REGISTRATION}>Регистрация</NavLink>
						) : (
							<NavLink to={ROUTES.LOGIN}>Авторизация</NavLink>
						)}
						<Button variant={"outline-success"} className="align-self-end" onClick={onAuthorizationClick}>
							{isLogin ? "Войти" : "Зарегистрироваться"}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	);
});
