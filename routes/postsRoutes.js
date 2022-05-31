const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')
// Controller

// helpers
const chechAuth = require('../helpers/auth').checkAuth

router.get('/add', chechAuth, PostController.createPost)
router.post('/add', chechAuth, PostController.createPostSave)
router.get('/dashboard', chechAuth, PostController.dashboard)
router.get('/', PostController.showPosts)



module.exports = router