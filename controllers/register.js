const User = require('../models/users')

const registerController = {
    get: async (req, res) => {
        res.render('register')
    },
    post: async (req, res) => {
        let success = false
        const { name = null, email = null, password = null, isInstructor = false } = req.body
        if([name, email, password].includes(null)) {
            return res.render('register', { error: 'requiredFieldsError' })
        }
        try {
            const hashedPass = await bcrypt.has(password, 10)
            const user = new User({ name, email, hashedPass, isInstructor })
            await user.save()
            success = true
        } catch(err) {
            console.error(err)
        }
        return success ? res.redirect('/login') : res.render('register', { error: 'serverError' })
    }
}

module.exports = registerController