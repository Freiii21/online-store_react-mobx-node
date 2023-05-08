import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { AppContext } from "index";
import { AppContextType, BrandType, DeviceInfoType, TypeType } from "types";
import { createDevice, fetchBrands, fetchTypes } from "http/deviceAPI";
import { observer } from "mobx-react";

type Props = {
	show: boolean;
	onHide: () => void;
};

export const CreateDevice: React.FC<Props> = observer(({ show, onHide }) => {
	const { device } = useContext(AppContext) as AppContextType;

	const [info, setInfo] = useState<DeviceInfoType[]>([]);
	const [name, setName] = useState<string>("");
	const [price, setPrice] = useState<number>(0);
	const [file, setFile] = useState<File | null>(null);

	const addInfo = () => {
		setInfo([...info, { title: "", description: "", number: Date.now() }]);
	};

	const removeInfo = (number: number) => {
		setInfo(info.filter((i) => i.number !== number));
	};

	const changeInfo = ({ key, value, number }: { key: string; value: string; number: number }) => {
		setInfo(info.map((element) => (element.number === number ? { ...element, [key]: value } : element)));
	};

	const addDevice = () => {
		const formData = new FormData();
		formData.append("name", name);
		formData.append("price", price.toString());
		formData.append("img", file as File);
		formData.append("brandId", device.selectedBrand.id.toString());
		formData.append("typeId", device.selectedType.id.toString());
		formData.append("info", JSON.stringify(info));

		createDevice(formData).then(() => {
			device.setSelectedType({} as TypeType);
			device.setSelectedBrand({} as BrandType);
			setName("");
			setPrice(0);
			setFile(null);
			setInfo([]);
			onHide();
		});
	};

	const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.currentTarget?.files) {
			setFile(e.currentTarget?.files[0]);
		}
	};

	useEffect(() => {
		fetchTypes().then((data) => device.setTypes(data));
		fetchBrands().then((data) => device.setBrands(data));
	}, []);

	return (
		<Modal show={show} onHide={onHide} size={"lg"} centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Добавить устройство</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Dropdown className="my-2">
						<Dropdown.Toggle>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map((type) => (
								<Dropdown.Item key={type.id} onClick={() => device.setSelectedType(type)}>
									{type.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="my-2">
						<Dropdown.Toggle>{device.selectedBrand.name || "Выберите брэнд"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map((brand) => (
								<Dropdown.Item key={brand.id} onClick={() => device.setSelectedBrand(brand)}>
									{brand.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Form.Control
						value={name}
						onChange={(e) => setName(e.currentTarget.value)}
						placeholder={"Введите название устройства"}
					/>
					<Form.Control
						value={price}
						onChange={(e) => setPrice(Number(e.currentTarget.value))}
						placeholder={"Введите стоимость"}
						type="number"
						className="mt-2"
					/>
					<Form.Control onChange={selectFile} type="file" className="mt-2" />
					<hr />
					<Button variant={"outline-dark"} onClick={addInfo}>
						Добавить новое свойство
					</Button>
					{info.map((i) => (
						<div key={i.number} className="mt-4 d-flex justify-content-between">
							<div>
								<Form.Control
									value={i.title}
									onChange={(e) => changeInfo({ key: "title", value: e.currentTarget.value, number: i.number })}
									placeholder={"Название"}
								/>
							</div>
							<div style={{ width: 450 }}>
								<Form.Control
									value={i.description}
									onChange={(e) => changeInfo({ key: "description", value: e.currentTarget.value, number: i.number })}
									placeholder={"Описание"}
								/>
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
				<Button variant={"outline-success"} onClick={addDevice}>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	);
});
