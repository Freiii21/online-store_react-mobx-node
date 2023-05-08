import React, { useContext } from "react";
import { observer } from "mobx-react";
import { AppContext } from "index";
import { AppContextType } from "types";
import { ListGroup } from "react-bootstrap";

export const TypeBar: React.FC = observer(() => {
	const { device } = useContext(AppContext) as AppContextType;

	return (
		<ListGroup>
			{device.types.map((type) => (
				<ListGroup.Item
					key={type.id}
					style={{ cursor: "pointer" }}
					active={type.id === device.selectedType?.id}
					onClick={() => device.setSelectedType(type)}
				>
					{type.name}
				</ListGroup.Item>
			))}
		</ListGroup>
	);
});
