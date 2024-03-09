const { updateUserCourses } = require('../models/user')

const userCoursesController = {
    post: async (req, res) => {
        let success = false
        try {
            const user = req.session?.user
            const courseId = req.body?.courseId
            const isAdding = req.body?.isAdding || false
            if(!user || !courseId) {
                return res.render('/courses', { errMessage: 'Please log in to add or remove a course' })
            }
            success = await updateUserCourses(courseId, user, isAdding)
            console.log('Success: ', success)
        } catch(err) {
            console.error(`ERROR UPDATING USER COURSES IN CONTROLLER: ${err}`)
        }
        return success ? res.redirect('/courses') : res.render('courses')
    }
}

module.exports = userCoursesController