const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const { User, Basket } = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role) => {
	return jwt.sign({id, email, role}, process.env.JWT_SECRET, {expiresIn: '2h'})
}

class UserController {
	async registration(req, res, next) {
		const { email, password, role } = req.body
		if (!email || !password) {
			return next(ApiError.badRequest('Некорректный email или password'))
		}

		const candidate = await User.findOne({where: {email}})
		if (candidate) {
			return next(ApiError.badRequest('Пользователь с таким email уже зарегистрирован'))
		}

		const hashPassword = await bcrypt.hash(password, 5)

		const user = await User.create({email, role, password: hashPassword})
		const basket = await Basket.create({userId: user.id})

		const jwt = generateJwt(user.id, user.email, user.role)

		return res.json({jwtToken: jwt})
	}

	async login(req, res, next) {
		const { email, password } = req.body

		const user = await User.findOne({where: {email}})
		if (!user) {
			return next(ApiError.badRequest('Пользователь с данным email отсутствует'))
		}

		const comparePassword = await bcrypt.compare(password, user.password)
		if (!comparePassword) {
			return next(ApiError.badRequest('Неверный пароль'))
		}

		const jwt = generateJwt(user.id, user.email, user.role)

		return res.json({jwtToken: jwt})
	}

	async check(req, res, next) {
		const token = generateJwt(req.user.id, req.user.email, req.user.role)
		res.json({jwtToken: jwt})
	}
}

module.exports = new UserController()