import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

type Props = {
	show: boolean;
	onHide: () => void;
};

export const CreateBrand: React.FC<Props> = ({ show, onHide }) => {
	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Добавить брэнд</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control placeholder={"Введите название брэнда"} />
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant={"outline-danger"} onClick={onHide}>
					Закрыть
				</Button>
				<Button variant={"outline-success"} onClick={onHide}>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
