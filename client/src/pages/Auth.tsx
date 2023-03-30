import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "utils/constants";

export const Auth: React.FC = () => {
	const location = useLocation();
	const isLogin = location.pathname === ROUTES.LOGIN;

	return (
		<Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
			<Card style={{ width: 600 }} className="p-5">
				<h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
				<Form className="d-flex flex-column">
					<Form.Control placeholder="Введите email..." className="mt-3" />
					<Form.Control placeholder="Введите пароль..." className="mt-3" />
					<div className="d-flex justify-content-between mt-3">
						{isLogin ? (
							<NavLink to={ROUTES.REGISTRATION}>Регистрация</NavLink>
						) : (
							<NavLink to={ROUTES.LOGIN}>Авторизация</NavLink>
						)}
						<Button variant={"outline-success"} className="align-self-end">
							{isLogin ? "Войти" : "Зарегистрироваться"}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	);
};
