import { Container, Col, Image, Card, Button } from "react-bootstrap"

const DevicePage = () => {
	const device = {id: 1, name: 'PocoLoc', price: 2500, rating: 5, img: `somepic.jpg`}
	const description = [
		{id: 1, title: 'Оперативная память', description: '5 гб'},
		{id: 2, title: 'Камера', description: '12 мп'},
		{id: 3, title: 'Процессор', description: 'Пентиум 3'},
		{id: 4, title: 'Кол-во ядер', description: '2'},
		{id: 5, title: 'Аккумулятор', description: '4000'}
	]

	return (
		<Container>
			<div className="mt-3 d-flex gap-2 justify-content-center">
				<Col md={4}>
					<Image width={250} height={250} src={device.img}/>
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
				{description.map((info, index) =>
					<div key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 5}}>
						{info.title}: {info.description}
					</div>
				)}
			</div>
		</Container>
	)
}

export default DevicePage