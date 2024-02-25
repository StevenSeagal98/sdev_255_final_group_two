const { Schema, model } = require('mongoose')

const user = new Schema({
    name: String,
    email: String,
    password: String,
    isInstructor: Boolean
})

const createUser = async () => {

}

const getUser = async () => {

}

const login = async () => {

}

const logout = async () => {
    
}

module.exports = model('User', user)