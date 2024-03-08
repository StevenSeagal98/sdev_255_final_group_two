// dashboardController.js

const dashboardController = {
    get: (req, res) => {
        console.log('Dashboard GET');
        const user = req.session?.user;
        if (!user) {
            return res.redirect('/login');
        } else {
            // Define navigation items based on user role
            const navigationItems = [
                { label: 'Home', url: '#' },
                { label: 'Enroll Course', url: '/dashboard/enroll.hbs' },
                { label: 'Drop Course', url: '/dashboard/dropCourse.hbs' },
                { label: 'Enrolled Courses', url: '/dashboard/schedule.hbs' },
                { label: 'Course Cart', url: '/dashboard/cart.hbs' },
                { label: 'Logout', url: '/dashboard/logout.hbs' },
            ];

            res.render('dashboard', {
                user,
                isInstructor: user.role === 'instructor',
                navigationItems, // Pass the navigation items to the view
            });
        }
    },
};

module.exports = dashboardController;
