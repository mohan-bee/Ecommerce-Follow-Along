const router = require('express').Router()
const {signup, login,getUser} = require('../controllers/userController')
const {upload} = require('../config/multer')
const authMiddleware = require('../middlewares/auth')

router.post('/signup',upload.single('file'),signup)
router.post('/login', login)
router.get('/', authMiddleware, getUser)

module.exports = router