// Dashboard controller
const dashboardController = {
    get: (req, res) => {
        console.log('Dashboard GET');
        const user = req.session?.user;
        if (!user) {
            return res.redirect('/login');
        } else {
            const navigationItems = [
                { label: 'Home', url: '#' },
                { label: 'Enroll Course', url: '/enroll' },
                { label: 'Drop Course', url: '/dashboard/dropCourse' },
                { label: 'Enrolled Courses', url: '/dashboard/schedule' },
                { label: 'Course Cart', url: '/dashboard/cart' },
                { label: 'Logout', url: '/dashboard/logout' },
            ];
            res.render('dashboard', {
                user,
                isInstructor: user.role === 'instructor',
                navigationItems,
                
            });
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



