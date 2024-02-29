const mongoose = require('mongoose'),
      bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['instructor', 'student'],
        required: true
    },
    courses: {
        type: Array,
        required: false
    }
})

const User = mongoose.model('User', userSchema)

const getUser = async (username, email) => {
    let user = null
    if(!username && !email) return user
    console.log('Username, email: ', username, email)
    try {
        username ? user = await User.findOne({ username }) : user = await User.findOne({ email })
        console.log('User in model: ', user)
    } catch(err) {
        console.error(`ERROR GETTING USER: ${err}`)
    }
    return user
}

const createUser = async (userData) => {
    let success = false, errMessage = 'User already exists, please pick a different username.'
    const {
        username = null,
        password = null,
        role = null,
        firstName = null,
        lastName = null,
        email = null
    } = userData
    console.log('Username: ', username, 'Email: ', email, 'Password: ', password, 'Role: ', role, 'First name: ', firstName, 'Last name: ', lastName)
    if (!username || !password || !role || !email || await getUser(username) !== null) {
        return {
            success,
            errMessage: 'Please provide a username, password, and role to register.'
        }
    }
    const hashedPassword = bcrypt.hashSync(password, 10)
    try {
        const newUser = new User({
            email,
            username,
            password: hashedPassword,
            role,
            firstName,
            lastName
        })
        console.log('New user: ', newUser)
        const save = await newUser.save()
        if(save) {
            success = true
            errMessage = null
        }
        console.log('Save: ', save)
    } catch(err) {
        console.error(`ERROR CREATING USER: ${err}`)
    }
    console.log('Success: ', success, 'Error message: ', errMessage)
    return { success, errMessage }
}

module.exports = { getUser, createUser }