import { Col, Card, Image } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from "../utils/consts"

const DeviceItem = ({device}) => {
	const navigate = useNavigate()
	console.log(history)

	return (
		<Col className="mt-3" md={3} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
			<Card  style={{width: 150, cursor: 'pointer'}} border={"light"}>
				<Image width={150} height={150} src={device.img}/>

				<div className="d-flex justify-content-between align-items-center mt-1">
					<div className="text-black-50">
						Samsung
					</div>
					<div className="d-flex align-items-center">
						<div className="text-black-50">{device.rating}</div>
						<div>⭐</div>
					</div>
				</div>

				<div>
						{device.name}
				</div>

			</Card>
		</Col>
	)
}

export default DeviceItem