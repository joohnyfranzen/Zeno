const Post = require('../models/Post')
const User = require('../models/User')

module.exports = class PostController {
    static async showPosts(req, res) {
        res.render('./drivercost/home')

    }
    static async dashboard(req, res) {
        const userid = req.session.userid

        const user = await User.findOne({
            where: {
                id: userid
            }
        })
        // check if user exists
        if(!user) {
            res.redirect('/login')
        }
    }


    static async dashboard(req, res) {
        res.render('./drivercost/dashboard')
    }
    static async createPost(req, res) {
        res.render('drivercost/create')
    }
    static async createPostSave(req, res) {
        const post = {
            title: req.body.title,
            subject: req.body.subject,
            UserId: req.session.userid
        }
        try {
            await Post.create(post)

            req.flash('message','Pensamento criado com sucesso!')
    
            req.session.save(() => {
                res.redirect('/posts/dashboard')
            })
        } catch (error) {
            console.log(error)
        }
    }
}