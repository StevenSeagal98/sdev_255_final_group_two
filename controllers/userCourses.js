const { updateUserCourses } = require('../models/user')

const userCoursesController = {
    post: async (req, res) => {
        let success = false
        try {
            const user = req.session?.user
            const courseId = req.body?.courseId
            const isAdding = req.body?.isAdding || false
            console.log('User, courseId, isAdding: ', user, courseId, isAdding)
            if(!user || !courseId) {
                return res.redirect('/courses', { errMessage: 'Please log in to add or remove a course' })
            }
            success = await updateUserCourses(courseId, user, isAdding)
        } catch(err) {
            console.error(`ERROR UPDATING USER COURSES IN CONTROLLER: ${err}`)
        }
        return success ? res.redirect('/courses') : res.redirect('/courses', { errMessage: 'Error updating user courses' })
    }
}

module.exports = userCoursesController