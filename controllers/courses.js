const { getCourses, createCourse, updateCourse, deleteCourse } = require('../models/courses')

const coursesController = {
    get: async (req, res) => {
        let data = []
        const courseId = req.params?.courseId
        console.log(req.params)
        console.log('Course id: ', courseId)
        try {
            data = typeof courseId == 'string' ? await getCourses(courseId) : await getCourses()
        } catch(err) {
            console.error(`ERROR GETTING COURSES IN CONTROLLER: ${err}`)
        }
        if(req.query?.updating) return res.render('updateCourse', { course: data[0] })
        return courseId ? res.render('singleCourse', { course: data[0] }) : res.render('courses', { courses: data })
    },
    post: async (req, res) => {
        try {
            console.log('Creating a course')
        } catch(err) {
            console.error(`ERROR CREATING COURSE IN CONTROLLER: ${err}`)
        }
    },
    put: async (req, res) => {
        let success = false
        try {
            success = await updateCourse(req.body)
        } catch(err) {
            console.error(`ERROR UPDATING COURSE IN CONTROLLER: ${err}`)
        }
        return success ? res.status(200).send('Course updated') : res.status(500).send('Error updating course')
    },
    del: async (req, res) => {
        try {

        } catch(err) {
            console.error(`ERROR DELETING COURSE IN CONTROLLER: ${err}`)
        }
    }
}

module.exports = coursesController