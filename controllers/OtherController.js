const Other = require('../models/Other')

module.exports = class OtherController {
    static contact(req, res) {
        res.render('./other/contact')

    }

    static about(req, res) {
        res.render('./other/about')
    }
    static async contactPost(req, res) {
        const {title, subject} = req.body
        if (title < 0 ) {
            req.flash('message', 'Insira um titulo!')
            res.redirect('./other/contact')

            return
        }
        if (subject < 0) {
            req.flash('message', 'Digite o assunto!')
            res.redirect('./other/contact')

            return
        }
        const contact = {
            title,
            subject
        }
        try {


            const createdUser = await Other.create(contact)

            req.flash('message', 'Contato realizado com sucesso!')
           
            req.session.save(() => {
                res.redirect('/')
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}
