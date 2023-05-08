import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "http/deviceAPI";

type Props = {
	show: boolean;
	onHide: () => void;
};

export const CreateType: React.FC<Props> = ({ show, onHide }) => {
	const [typeName, setTypeName] = useState<string>("");

	const addType = () => {
		createType(typeName).then(() => {
			setTypeName("");
			onHide();
		});
	};

	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Добавить тип</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						placeholder={"Введите название типа"}
						value={typeName}
						onChange={(e) => setTypeName(e.currentTarget.value)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant={"outline-danger"} onClick={onHide}>
					Закрыть
				</Button>
				<Button variant={"outline-success"} onClick={addType}>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
