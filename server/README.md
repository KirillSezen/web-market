# Node.js web-market (server)

## Описание
Приложение веб-маркета Серверная часть.

Реализовал: Sequelize сущности User, Basket, BasketDevice, Type, Brand, Rating, DeviceInfo, TypeBrand и связей между ними;
Контроллеры, роутеры, Дто для брендов, девайсов, типов и пользователей;
middleware - для проверки авторизации, ролей и обработки ошибок;
error - для кастомных ошибок;

## Стек
Node.js, express, nodemon, PostgreSQL, pg, sequelize, uuid, JWT, jsonwebtoken, cors, bcrypt.