import { $authHost, $host } from ".";
import {jwtDecode} from 'jwt-decode'

export const registration = async (email, password) => {
	const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
	return jwtDecode(data.jwtToken)
}

export const login = async (email, password) => {
	const {data} = await $host.post('api/user/login', {email, password})
	return jwtDecode(data.jwtToken)
}

export const check = async () => {
	const response = await $host.post('api/user/auth')
	return response
}