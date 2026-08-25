import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from "../main"
import DeviceItem from "./DeviceItem"

const DeviceList = observer(() => {
	const { device } = useContext(Context)

	return (
		<div className="d-flex flex-wrap mx-4"> 
			{device.devices.map(device => 
				<DeviceItem key={device.id} device={device}/>
			)}
			
		</div>
	)
})

export default DeviceList