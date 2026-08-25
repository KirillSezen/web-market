import { useContext } from "react"
import { Context } from "../main"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts"
import { observer } from "mobx-react-lite"


const NavBar = observer(() => {
	const navigate = useNavigate()
	const { user } = useContext(Context)

	const logOut = () => {
		user.setUser({})
		user.setIsAuth(false)
		navigate(SHOP_ROUTE)
	}

	return (
		<div>
			<Navbar bg="dark" data-bs-theme="dark">
        <Container>
					<NavLink style={{color: 'white'}} to={SHOP_ROUTE}>
						Всё по 2 рубля
					</NavLink>
					{user.isAuth ? 
						<Nav className="ml-auto" style={{color: 'white'}}>
						<Button onClick={() => navigate(ADMIN_ROUTE)} variant={"outline-light"}>Админ панель</Button>
            <Button onClick={() => logOut()} variant={"outline-light"} style={{marginLeft: '10px'}}>Выйти</Button>
          	</Nav>
						:
						<Nav className="ml-auto" style={{color: 'white'}}>
            <Button onClick={() => navigate(LOGIN_ROUTE)} variant={"outline-light"}>Авторизация</Button>
          	</Nav>
					}
        </Container>
      </Navbar>
		</div>
	)
})

export default NavBar