import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from "../main"
import { Card } from "react-bootstrap"

const BrandBar = observer(() => {
	const { device } = useContext(Context)

	return (
		<div className="d-flex mx-3">
			{device.brands.map(brand => 
				<Card
				style={{cursor: "pointer"}}
				border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
				onClick={() => device.setSelectedBrand(brand)}
				key={brand.id} 
				className="p-3">
					{brand.name}
				</Card>
			)}
		</div>
	)
})

export default BrandBar