import { Modal, Form, Button, Dropdown, Col } from "react-bootstrap"
import { Context } from "../../main"
import { useContext, useState } from "react"

const CreateDevice = ({show, onHide}) => {
	const {device} = useContext(Context)
	const [info, setInfo] = useState([])

	const addInfo = () => {
		setInfo([...info, {title: '', description: '', number: Date.now()}])
	}

	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
	}

	return (
		<Modal
		 	show={show}
			onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
				<Form>
					<Dropdown className="mt-2">
						<Dropdown.Toggle>Выберете тип</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type => 
								<Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown className="mt-2">
						<Dropdown.Toggle>Выберете бренд</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand => 
								<Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>

					<Form.Control type="text" className="mt-3" placeholder="Введите название устройства"/>

					<Form.Control type="number" className="mt-3" placeholder="Введите стоимость устройства"/>

					<Form.Control type="file" className="mt-3"/>

					<hr/>

					<Button variant={"outline-dark"} onClick={addInfo}>
						Добавить характеристику
					</Button>

					{
						info.map(i =>
							<div key={i.number} className="mt-3">
								<Col md={4}>
									<Form.Control placeholder="Введите название характеристики"/>
								</Col>

								<Col className="mt-1" md={4}>
									<Form.Control placeholder="Введите характеристику"/>
								</Col>

								<Col className="mt-1" md={4}>
									<Button onClick={() => removeInfo(i.number)} variant={"outline-danger"}>
										Удалить
									</Button>
								</Col>
							</div>
						)
					}


				</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
				<Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
	)
}

export default CreateDevice