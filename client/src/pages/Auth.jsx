import { Container, Form, Card, Button, Row } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts"

const Auth = () => {
	const location = useLocation() 
	const isLogin  = location.pathname === LOGIN_ROUTE

	return (
		<Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>

			<Card style={{width: 600}} className="p-5">
				{isLogin ?
				<h2 className="m-auto">Авторизация</h2>
				:
				<h2 className="m-auto">Регистрация</h2>
				}

				<Form className="d-flex flex-column">

					<Form.Control className="mt-2" placeholder="Введите ваш email..."/>

					<Form.Control className="mt-2" placeholder="Введите ваш пароль..."/>

					<div className="d-flex justify-content-between mt-3 pl-3 pr-3">
						{isLogin ?
							<>
								<div>
									Нет аккаунта ? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся !
									</NavLink>
								</div>

								<Button variant={"outline-success"}>
									Войти
								</Button>
							</>
							:
							<>
								<div>
									Есть аккаунт ? <NavLink to={LOGIN_ROUTE}> Войди !
									</NavLink>
								</div>

								<Button variant={"outline-success"}>
									Зарегистрироваться
								</Button>
							</>
						}
					</div>
				</Form>
			</Card>
		</Container>
	)
}

export default Auth