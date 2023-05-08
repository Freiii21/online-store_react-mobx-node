import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { DeviceType } from "types";
import star from "assets/star.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "utils/constants";

type Props = {
	device: DeviceType;
};
export const DeviceItem: React.FC<Props> = ({ device }) => {
	const navigate = useNavigate();
	const devicePath = ROUTES.DEVICE + "/" + device.id;
	const imageUrl = process.env.REACT_APP_API_URL + device.img;

	return (
		<Col md={3} className="mt-3" onClick={() => navigate(devicePath)}>
			<Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
				<Image width={150} height={150} src={imageUrl} />
				<div className="d-flex justify-content-between align-items-center mt-1 text-black-50">
					<div>{device.name}</div>
					<div className="d-flex align-items-center">
						<div>{device.rating}</div>
						<Image width={18} height={18} src={star} />
					</div>
				</div>
				<div>{device.price}</div>
			</Card>
		</Col>
	);
};
