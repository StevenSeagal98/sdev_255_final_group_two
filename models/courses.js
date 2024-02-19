const { model, Schema } = require('mongoose')

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subjectArea: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    }
})

const Course = model('Course', courseSchema)

const createCourse = async (data) => {
    let success = false
    const { name, description, subjectArea, credits } = data
    if(![name, description, subjectArea, credits].every(prop => prop || prop === 0)) return success
    const course = new Course({ name, description, subjectArea, credits })
    try {
        const res = await course.save()
        console.log('Res: ', res)
        if(res) success = true
    } catch(err) {
        console.error(`ERROR SAVING COURSE: ${err} ${JSON.stringify(data)}`)
    }
    return success
}

const updateCourse = async ({ name = null, description = null, subjectArea = null, credits = null }) => {
    let success = false
    if(![name, description, subjectArea, credits].every(prop => prop || prop === 0)) return success
    try {

    } catch(err) {
        console.error(`ERROR UPDATING COURSE: ${err} ${JSON.stringify(data)}`)
    }
}

const deleteCourse = async ({ courseId = null }) => {
    let success = false
    if(!courseId) return success
    try {

    } catch(err) {
        console.error(`ERROR DELETING COURSE: ${err} ${JSON.stringify(data)}`)
    }
    return success
}

const getCourses = async (courseId = null) => {
    let courses = []
    console.log('Course id in getCourses: ', courseId)
    try {
        console.log('Course id: ', courseId)
        if(typeof courseId == 'string') {
            console.log('Is string, finding one by id: ', courseId)
            courses.push(await Course.findOne({ _id: courseId }))
            console.log('Courses: ', courses)
        } else {
            console.log('Is not string, finding all')
            courses.push(...await Course.find())
        }
    } catch(err) {
        console.error(`ERROR GETTING COURSES: ${err}`)
    }
    return courses.length ? courses.map(course => {
        const courseObj = course.toObject()
        courseObj.link = `/courses/${courseObj._id}`
        courseObj.registerLink = `/register/${courseObj._id}`
        return courseObj
    }) : []
}

module.exports = { createCourse, getCourses, updateCourse, deleteCourse }