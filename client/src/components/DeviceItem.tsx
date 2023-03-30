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

	return (
		<Col md={3} className="mt-3" onClick={() => navigate(devicePath)}>
			<Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
				<Image width={150} height={150} src={device.img} />
				<div className="d-flex justify-content-between align-items-center mt-1 text-black-50">
					<div>Samsung...</div>
					<div className="d-flex align-items-center">
						<div>{device.rating}</div>
						<Image width={18} height={18} src={star} />
					</div>
				</div>
				<div>{device.name}</div>
			</Card>
		</Col>
	);
};
