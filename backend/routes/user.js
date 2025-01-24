const router = require('express').Router()
const {signup, login} = require('../controllers/userController')
const {upload} = require('../config/multer')

router.post('/signup',upload.single('file'),signup)
router.post('/login', login)


module.exports = router