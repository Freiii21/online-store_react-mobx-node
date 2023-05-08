import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeBar } from "components/TypeBar";
import { BrandBar } from "components/BrandBar";
import { DeviceList } from "components/DeviceList";
import { observer } from "mobx-react";
import { AppContext } from "index";
import { AppContextType } from "types";
import { fetchBrands, fetchDevices, fetchTypes } from "http/deviceAPI";
import { Pages } from "components/Pages";

export const Shop: React.FC = observer(() => {
	const { device } = useContext(AppContext) as AppContextType;

	useEffect(() => {
		fetchTypes().then((data) => device.setTypes(data));
		fetchBrands().then((data) => device.setBrands(data));
		fetchDevices({ typeId: null, brandId: null, itemsOnPage: device.itemsOnPage }).then((data) => {
			device.setDevices(data.rows);
			device.setTotalPages(data.count);
		});
	}, []);

	useEffect(() => {
		fetchDevices({
			typeId: device.selectedType.id,
			brandId: device.selectedBrand.id,
			currentPage: device.currentPage,
			itemsOnPage: device.itemsOnPage,
		}).then((data) => {
			device.setDevices(data.rows);
			device.setTotalPages(data.count);
		});
	}, [device.currentPage, device.selectedBrand, device.selectedType]);

	return (
		<Container>
			<Row className="mt-3">
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandBar />
					<DeviceList />
					<Pages />
				</Col>
			</Row>
		</Container>
	);
});
