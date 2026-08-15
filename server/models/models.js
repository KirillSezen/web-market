const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: {type: DataTypes.STRING, unique: true},
	email: {type: DataTypes.STRING, unique: true},
	password: {type: DataTypes.STRING},
	role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
	id: {type: DataTypes.STRING, unique: true},

})

const BasketDevice = sequelize.define('basket_device', {
	id: {type: DataTypes.STRING, unique: true},
	
})

const Device = sequelize.define('device', {
	id: {type: DataTypes.STRING, unique: true},
	name: {type: DataTypes.STRING, unique: true},
	price: {type: DataTypes.INTEGER, allowNull: false}
})