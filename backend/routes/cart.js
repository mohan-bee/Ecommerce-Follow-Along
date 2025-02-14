const {addToCart, allCartItems, updateTotal, deleteItem} = require('../controllers/cartController')
const router = require('express').Router()

router.post('/add', addToCart)
router.post('/total', updateTotal)
router.get('/delete/:id', deleteItem)
router.get('/', allCartItems)

module.exports = router