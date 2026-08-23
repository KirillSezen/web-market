import { useContext } from "react"
import { Context } from "../main"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { SHOP_ROUTE } from "../utils/consts"
import { observer } from "mobx-react-lite"

const NavBar = observer(() => {
	const { user } = useContext(Context)

	return (
		<div>
			<Navbar bg="dark" data-bs-theme="dark">
        <Container>
					<NavLink style={{color: 'white'}} to={SHOP_ROUTE}>
						Всё по 2 рубля
					</NavLink>
					{user.isAuth ? 
						<Nav className="ml-auto" style={{color: 'white'}}>
						<Button variant={"outline-light"}>Админ панель</Button>
            <Button variant={"outline-light"} style={{marginLeft: '10px'}}>Выйти</Button>
          	</Nav>
						:
						<Nav className="ml-auto" style={{color: 'white'}}>
            <Button onClick={() => user.setIsAuth(true)} variant={"outline-light"}>Авторизация</Button>
          	</Nav>
					}
        </Container>
      </Navbar>
		</div>
	)
})

export default NavBar