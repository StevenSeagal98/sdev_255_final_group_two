const dashboardController = {
    get: (req, res) => {
        const user = req.session?.user
        if(!user) {
            return res.redirect('/login')
        } else {
            res.render('dashboard', { user })
        }
    }
}

module.exports = dashboardController