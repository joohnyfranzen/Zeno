const Post = require('../models/Post')
const User = require('../models/User')

module.exports = class PostController {
    static async showPosts(req, res) {
        res.render('./posts/home')

    }
    static async dashboard(req, res) {
        const userid = req.session.userid

        const user = await User.findOne({
            where: {
                id: userid,
            },
            include: Post,
            plain: true,
        })
        // check if user exists
        if(!user) {
            res.redirect('/login')
        }

        const posts = user.Posts.map((result) => result.dataValues)

        console.log(posts)


        res.render('./posts/dashboard', { posts })
    }

    static async createPost(req, res) {
        res.render('posts/create')
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