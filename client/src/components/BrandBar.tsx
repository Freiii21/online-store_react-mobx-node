import React, { useContext } from "react";
import { observer } from "mobx-react";
import { AppContext } from "App";
import { AppContextType } from "types";
import { Card } from "react-bootstrap";

export const BrandBar: React.FC = observer(() => {
	const { device } = useContext(AppContext) as AppContextType;

	return (
		<div className="d-flex flex-wrap">
			{device.brands.map((brand) => (
				<Card
					key={brand.id}
					className="p-3 me-1 mb-1"
					style={{ cursor: "pointer" }}
					border={brand.id === device.selectedBrand.id ? "danger" : ""}
					onClick={() => device.setSelectedBrand(brand)}
				>
					{brand.name}
				</Card>
			))}
		</div>
	);
});
