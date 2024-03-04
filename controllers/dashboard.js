const dashboardController = {
    get: (req, res) => {
        console.log('Dashboard GET')
        const user = req.session?.user
        if(!user) {
            return res.redirect('/login')
        } else {
            res.render('dashboard', {
                user,
                isInstructor: user.role === 'instructor' 
            })
        }
    }
}

module.exports = dashboardController