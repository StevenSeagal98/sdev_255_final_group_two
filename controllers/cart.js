const cartController = {
    get: (req, res) => {
        const user = req.session?.user
        if(!user) {
            return res.redirect('/login')
        } else {
            res.render('cart', { user, isInstructor: user.role === 'instructor' })
        }
    }
}

module.exports = cartController