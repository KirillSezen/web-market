import { useEffect, useState } from "react"
import { Container, Col, Image, Card, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { fetchOneDevice } from "../http/deviceAPI"

const DevicePage = () => {
	const [device, setDevice] = useState({info: []})
	const {id} = useParams()

	useEffect(() => {
		fetchOneDevice(id).then(data => setDevice(data))
	}, [])

	return (
		<Container>
			<div className="mt-3 d-flex gap-2 justify-content-center">
				<Col md={4}>
					<Image width={250} height={250} src={import.meta.env.VITE_REACT_APP_API_URL + device.img}/>
				</Col>

				<Col md={4}>
					<div>
						<h2 >{device.name}</h2>
						<div className="d-flex align-items-center" style={{fontSize: 140}}>
							{device.rating}
							<div>⭐</div>
						</div>
					</div>
				</Col>

				<Col md={4}>
					<Card className="d-flex flex-column align-items-center justify-content-around" style={{width: 180, height: 180, fontSize: 32, border: '5px solid lightgray'}}>
						<h3>{device.price}</h3>
						<Button variant={"outline-dark"}>Добавить в корзину</Button>
					</Card>
				</Col>
			</div>

			<div className="d-flex flex-column m-3">
				<h1>Характеристики</h1>
				{device.info.map((info, index) =>
					<div key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 5}}>
						{info.title}: {info.description}
					</div>
				)}
			</div>
		</Container>
	)
}

export default DevicePage