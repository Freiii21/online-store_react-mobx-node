import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "assets/bigStar.png";

export const Device: React.FC = () => {
	const device = {
		id: 1,
		name: "Iphone 12 pro",
		price: 25000,
		rating: 5,
		img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png",
	};
	const description = [
		{ id: 1, title: "Оперативнвя память", description: "5 гб" },
		{ id: 2, title: "Камера", description: "12 мп" },
		{ id: 3, title: "Процессор", description: "Пентиум 3" },
		{ id: 4, title: "Кол-во ядер", description: "2" },
		{ id: 5, title: "Аккумулятор", description: "4000" },
	];

	return (
		<Container className="mt-3">
			<Row>
				<Col md={4}>
					<Image width={300} height={300} src={device.img} />
				</Col>
				<Col md={4}>
					<div className="d-flex flex-column align-items-center">
						<h2>{device.name}</h2>
						<div
							className="d-flex justify-content-center align-items-center"
							style={{
								background: `url(${bigStar}) no-repeat center center/cover`,
								width: 240,
								height: 240,
								fontSize: 64,
							}}
						>
							{device.rating}
						</div>
					</div>
				</Col>
				<Col md={4}>
					<Card
						className="d-flex flex-column align-items-center justify-content-around"
						style={{ width: 300, height: 300, fontSize: 32, border: "5px solid lightgrey" }}
					>
						<h3>От: {device.price} руб.</h3>
						<Button variant={"outline-dark"}>Добавить в корзину</Button>
					</Card>
				</Col>
			</Row>
			<Row className="d-flex flex-column m-3">
				<h1 className="ps-0">Характеристики:</h1>
				{description.map((info, index) => (
					<Row key={info.id} style={{ background: index % 2 === 0 ? "lightgray" : "", padding: 10 }}>
						{info.title}: {info.description}
					</Row>
				))}
			</Row>
		</Container>
	);
};
