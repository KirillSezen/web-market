import { Container, Form, Card, Button } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts"
import { login, registration } from "../http/userAPI"
import { useState } from "react"

const Auth = () => {
	const location = useLocation() 
	const isLogin  = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


	const click = async () => {
		if (isLogin) {
			const response = await login(email, password)
			console.log(response)
		} else {
			const response = await registration(email, password)
			console.log(response)
		}
	}

	return (
		<Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>

			<Card style={{width: 600}} className="p-5">
				{isLogin ?
				<h2 className="m-auto">Авторизация</h2>
				:
				<h2 className="m-auto">Регистрация</h2>
				}

				<Form className="d-flex flex-column">

					<Form.Control className="mt-2" placeholder="Введите ваш email..." value={email} onChange={e => setEmail(e.target.value)}/>

					<Form.Control type="password" className="mt-2" placeholder="Введите ваш пароль..." value={password} onChange={e => setPassword(e.target.value)}/>

					<div className="d-flex justify-content-between mt-3 pl-3 pr-3">
						{isLogin ?
							<>
								<div>
									Нет аккаунта ? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся !
									</NavLink>
								</div>

								<Button onClick={click} variant={"outline-success"}>
									Войти
								</Button>
							</>
							:
							<>
								<div>
									Есть аккаунт ? <NavLink to={LOGIN_ROUTE}> Войди !
									</NavLink>
								</div>

								<Button onClick={click} variant={"outline-success"}>
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