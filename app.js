const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World')
})

const port = process.env.PORT || 5555

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})