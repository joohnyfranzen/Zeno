const express = require('express')
const router = express.Router()
const OtherController = require('../controllers/OtherController')
const PostController = require('../controllers/PostController')

router.get('/contact', OtherController.contact)
router.post('/contact', OtherController.contactPost)
router.get('/', PostController.showPosts)
router.get('/about', OtherController.about)


module.exports = router