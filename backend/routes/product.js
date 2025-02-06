const router = require('express').Router()
const {createProduct, getProductById, getAllProducts, updateProduct, deleteProduct,myProducts} = require('../controllers/productController')
const {upload} = require('../config/multer')

router.post('/', upload.array('images', 10), createProduct)
router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.get('/my-products', myProducts)
router.put('/:id',updateProduct )
router.delete('/:id', deleteProduct)


module.exports = router