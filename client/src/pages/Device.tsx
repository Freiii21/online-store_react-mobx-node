import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "assets/bigStar.png";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "http/deviceAPI";
import { DeviceType } from "types";

export const Device: React.FC = () => {
	const [device, setDevice] = useState<DeviceType>({} as DeviceType);
	const imageUrl = process.env.REACT_APP_API_URL + device.img;
	const params = useParams();
	const id = params.id as string;

	useEffect(() => {
		fetchOneDevice(id).then((data) => setDevice(data));
	}, []);

	return (
		<Container className="mt-3">
			<Row>
				<Col md={4}>
					<Image width={300} height={300} src={imageUrl} />
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
			<Row className="d-flex flex-column m-3 me-0">
				<h1 className="ps-0">Характеристики:</h1>
				{device.info?.length &&
					device.info.map((info, index) => (
						<Row key={info.id} style={{ background: index % 2 === 0 ? "lightgray" : "", padding: 10, marginLeft: 0 }}>
							{info.title}: {info.description}
						</Row>
					))}
			</Row>
		</Container>
	);
};
