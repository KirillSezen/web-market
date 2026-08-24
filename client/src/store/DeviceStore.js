import { makeAutoObservable } from "mobx"

export default class DeviceStore {
	constructor() {
		this._types = [
			{id: 1, name: 'холодильники'},
			{id: 2, name: 'смартфоны'},
			{id: 3, name: 'планшеты'},
			{id: 4, name: 'умные часы'},
			{id: 5, name: 'ноутбуки'}
		]
		this._brands = [
			{id: 1, name: 'samsung'},
			{id: 2, name: 'huawei'}
		]
		this._devices = [
			{id: 1, name: 'poko loko', price: 2500, rating: 5, img: `somepic.jpg`},
			{id: 2, name: 'poko phone', price: 3100, rating: 4.8, img: `somepic.jpg`},
			{id: 3, name: 'samsa smart', price: 3500, rating: 5, img: `somepic.jpg`},
			{id: 4, name: 'sung fong', price: 10, rating: 4.5, img: `somepic.jpg`},
			{id: 5, name: 'beinjiling', price: 90, rating: 3.5, img: `somepic.jpg`},
			{id: 6, name: 'redmi', price: 100, rating: 4.3, img: `somepic.jpg`}
		]
		this._selectedType = {}
		this._selectedBrand = {}

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
	setSelectedType(type) {
		this._selectedType = type
	}
	setSelectedBrand(brand) {
		this._selectedBrand = brand
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

	get selectedType() {
		return this._selectedType
	}

	get selectedBrand() {
		return this._selectedBrand
	}
}