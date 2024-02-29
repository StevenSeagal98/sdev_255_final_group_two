const { createUser } = require('../models/user')

const registerController = {
    get: (req, res) => res.render('register'),
    post: async (req, res) => {
        console.log('Registering user: ', req.body)
        const createUserReq = await createUser(req.body)
        console.log('Create user req: ', createUserReq)
        const { errMessage = null } = createUserReq
        if(!errMessage) return res.render('login')
        res.render('/register', { errMessage })
        //const createUser = await createUser(req.body)
    }
}

module.exports = registerController