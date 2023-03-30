import React, { useContext, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { AppContext } from "App";
import { AppContextType, DeviceInfoType } from "types";

type Props = {
	show: boolean;
	onHide: () => void;
};

export const CreateDevice: React.FC<Props> = ({ show, onHide }) => {
	const { device } = useContext(AppContext) as AppContextType;
	const [info, setInfo] = useState<DeviceInfoType[]>([]);

	const addInfo = () => {
		setInfo([...info, { title: "", description: "", number: Date.now() }]);
	};

	const removeInfo = (number: number) => {
		setInfo(info.filter((i) => i.number !== number));
	};

	return (
		<Modal show={show} onHide={onHide} size={"lg"} centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Добавить устройство</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className="my-2">
						<Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map((type) => (
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="my-2">
						<Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map((brand) => (
								<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control placeholder={"Введите название устройства"} />
					<Form.Control placeholder={"Введите стоимость"} type="number" className="mt-2" />
					<Form.Control type="file" className="mt-2" />
					<hr />
					<Button variant={"outline-dark"} onClick={addInfo}>
						Добавить новое свойство
					</Button>
					{info.map((i) => (
						<div key={i.number} className="mt-4 d-flex justify-content-between">
							<div>
								<Form.Control placeholder={"Название"} />
							</div>
							<div style={{ width: 450 }}>
								<Form.Control placeholder={"Описание"} />
							</div>
							<div>
								<Button variant={"outline-danger"} onClick={() => removeInfo(i.number)}>
									Удалить
								</Button>
							</div>
						</div>
					))}
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
