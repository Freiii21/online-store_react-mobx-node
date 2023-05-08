import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "http/deviceAPI";

type Props = {
	show: boolean;
	onHide: () => void;
};

export const CreateBrand: React.FC<Props> = ({ show, onHide }) => {
	const [brandName, setBrandName] = useState<string>("");

	const addBrand = () => {
		createBrand(brandName).then(() => {
			setBrandName("");
			onHide();
		});
	};

	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Добавить брэнд</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						placeholder={"Введите название брэнда"}
						value={brandName}
						onChange={(e) => setBrandName(e.currentTarget.value)}
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant={"outline-danger"} onClick={onHide}>
					Закрыть
				</Button>
				<Button variant={"outline-success"} onClick={addBrand}>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
