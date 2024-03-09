// Dashboard controller
const dashboardController = {
    get: (req, res) => {
        const user = req.session?.user
        if(!user) {
            return res.redirect('/login')
        } else {
            res.render('dashboard', { user, isInstructor: user.role === 'instructor' })
        }
    },
    // Define the other controller functions here
    enroll: (req, res) => {
        // Your code here
    },
    dropCourse: (req, res) => {
        // Your code here
    },
    logout: (req, res) => {
        // Your code here
    },
};

module.exports = dashboardController;


