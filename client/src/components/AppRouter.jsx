import {Route, Routes } from 'react-router-dom'
import { authRoutes, publicRouter } from '../routes'
import Shop from '../pages/Shop'
import { useContext } from 'react'
import { Context } from '../main'

const AppRouter = () => {
	const {user} = useContext(Context)

	return (
		<Routes>
			{user.isAuth && authRoutes.map(({path, Component}) =>
				<Route key={path} path={path} element={<Component/>} exact/>
			)}

			{publicRouter.map(({path, Component}) =>
				<Route key={path} path={path} element={<Component/>} exact/>
			)}

			<Route path='*' element={<Shop/>}/>
		</Routes>
	)
}

export default AppRouter