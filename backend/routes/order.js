const {addOrder} = require('../controllers/orderController')
const router = require('express').Router()

router.post('/place', addOrder)

module.exports = router