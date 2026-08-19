const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError')
const { title } = require('process')

class DeviceController {
	async create(req, res, next) {
		try {
			const {name, price, brandId, typeId, info} = req.body
			const {img} = req.files

			let fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))

			if(info) {
				info = JSON.parse(info)
				info.foreach(i => 
					DeviceInfo.create({
						title: i.title,
						description: i.description,
						deviceId: device.id
					})
				)
			}

			const device = await Device.create({name, price, brandId, typeId, img: fileName})

			return res.json(device)
		} catch(e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res) {
		const {brandId, typeId, limit = 5, page = 1} = req.query

		let offset = page * limit  - limit

		let devices

		if(!brandId && !typeId) {
			devices = await Device.findAndCountAll({limit, offset})
		}

		if(brandId && !typeId) {
			devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
		}

		if(!brandId && typeId) {
			devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
		}

		if(brandId && typeId) {
			devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})
		}

		return res.json(devices)
	}

	async getOne(req, res) {
		const {id} = req.params
		if(!id) {
			next(ApiError.badRequest('id отсутствует'))
		}

		const device = await Device.findByPk(id, {include: [{model: DeviceInfo, as: 'info'}]})

		return res.json(device)
	}
}

module.exports = new DeviceController()