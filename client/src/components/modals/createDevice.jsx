import { Modal, Form, Button, Dropdown, Col } from "react-bootstrap"
import { Context } from "../../main"
import { useContext, useState, useEffect } from "react"
import { fetchTypes, fetchBrands, createDevice } from "../../http/deviceAPI"
import { observer } from "mobx-react-lite"

const CreateDevice = observer(({show, onHide}) => {
	const {device} = useContext(Context)
	const [info, setInfo] = useState([])
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
	const [file, setFile] = useState(null)

	useEffect(() => {
		fetchTypes().then(data => device.setTypes(data))
		fetchBrands().then(data => device.setBrands(data))
	}, [])

	const addInfo = () => {
		setInfo([...info, {title: '', description: '', number: Date.now()}])
	}

	const removeInfo = (number) => {
		setInfo(info.filter(i => i.number !== number))
	}

	const changeInfo = (key, value, number) => {
		setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
	}

	const selectFile = e => {
		setFile(e.target.files[0])
	}

	const addDevice = () => {
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', `${price}`)
		formData.append('img', file)
		formData.append('brandId', device.selectedBrand.id)
		formData.append('typeId', device.selectedType.id)
		formData.append('info', JSON.stringify(info))

		createDevice(formData).then(data => onHide())
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
						<Dropdown.Toggle>{device.selectedType.name || "Выберете тип"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.types.map(type => 
								<Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown className="mt-2">
						<Dropdown.Toggle>{device.selectedBrand.name || "Выберете бренд"}</Dropdown.Toggle>
						<Dropdown.Menu>
							{device.brands.map(brand => 
								<Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
							)}
						</Dropdown.Menu>
					</Dropdown>

					<Form.Control value={name} onChange={e => setName(e.target.value)} type="text" className="mt-3" placeholder="Введите название устройства"/>

					<Form.Control value={price} onChange={e => setPrice(Number(e.target.value))} type="number" className="mt-3" placeholder="Введите стоимость устройства"/>

					<Form.Control type="file" className="mt-3" onChange={selectFile}/>

					<hr/>

					<Button variant={"outline-dark"} onClick={addInfo}>
						Добавить характеристику
					</Button>

					{
						info.map(i =>
							<div key={i.number} className="mt-3">
								<Col md={4}>
									<Form.Control value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)} placeholder="Введите название характеристики"/>
								</Col>

								<Col className="mt-1" md={4}>
									<Form.Control value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} placeholder="Введите характеристику"/>
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
				<Button variant={"outline-success"} onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
	)
})

export default CreateDevice