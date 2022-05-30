const Post = require('../models/Post')
const User = require('../models/User')

module.exports = class PostController {
    static async showPosts(req, res) {
        res.render('./drivercost/home')

    }
    static async dashboard(req, res) {
        res.render('./drivercost/dashboard')
    }
    static async createPost(req, res) {
        res.render('drivercost/create')
    }
}