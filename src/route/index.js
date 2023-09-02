// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const slider_header = require('./slider_header')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', slider_header)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
