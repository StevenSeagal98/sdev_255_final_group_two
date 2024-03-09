// dashboardController.js
const express = require('express');
const dashboardRouter = express.Router();
const { enroll, dropCourse, logout } = require('../controllers/dashboard');


// Define your routes
dashboardRouter.get('/enroll', enroll); 
dashboardRouter.get('/dropCourse', dropCourse); 
dashboardRouter.get('/logout', logout);

const dashboardController = {
    get: (req, res) => {
        console.log('Dashboard GET');
        const user = req.session?.user;
        if (!user) {
            return res.redirect('/login');
        } else {
            
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
                navigationItems,
            });
        }
    },
};

module.exports = dashboardController;



