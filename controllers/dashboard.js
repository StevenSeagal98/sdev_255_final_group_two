const { Course } = require('../models/courses');

const dashboardController = {
    get: async (req, res) => {
        const user = req.session?.user;
        if (!user) {
            return res.redirect('/login');
        } else {
            try {
                let courses;
                if (user.role === 'instructor') {
                    // Fetch all courses from the database with .lean() to return plain JavaScript objects
                    courses = await Course.find().lean();
                }
                res.render('dashboard', {
                    user,
                    isInstructor: user.role === 'instructor',
                    courses // Passing courses directly to the template
                });
            } catch (error) {
                console.error('Error fetching courses:', error);
                res.render('dashboard', {
                    user,
                    isInstructor: user.role === 'instructor',
                    error: 'Failed to load courses.'
                });
            }
        }
    }
};

module.exports = dashboardController;
