import { makeAutoObservable } from "mobx"

export default class DeviceStore {
	constructor() {
		this._types = [
			{id: 1, name: 'холодильник'},
			{id: 2, name: 'смартфон'}
		]
		this._brands = [
			{id: 1, name: 'samsung'},
			{id: 2, name: 'huawei'}
		]
		this._devices = [
			{id: 1, name: 'poko loko', price: 2500, rating: 5, img: `somepic.jpg`},
			{id: 2, name: 'poko phone', price: 3100, rating: 4.8, img: `somepic.jpg`},
			{id: 3, name: 'samsa smart', price: 3500, rating: 5, img: `somepic.jpg`}
		]
		makeAutoObservable(this)
	}

	setTypes(types) {
		this._types = types
	}

	setBrands(brands) {
		this._brands = brands
	}

	setDevices(devices) {
		this._devices = devices
	}

	get types() {
		return this._types
	}

	get brands() {
		return this._brands
	}

	get devices() {
		return this._devices
	}
}