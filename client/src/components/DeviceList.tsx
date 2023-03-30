import React, { useContext } from "react";
import { observer } from "mobx-react";
import { AppContext } from "App";
import { AppContextType } from "types";
import { Row } from "react-bootstrap";
import { DeviceItem } from "components/DeviceItem";

export const DeviceList: React.FC = observer(() => {
	const { device } = useContext(AppContext) as AppContextType;

	return (
		<Row className="d-flex">
			{device.devices.map((device) => (
				<DeviceItem key={device.id} device={device} />
			))}
		</Row>
	);
});
