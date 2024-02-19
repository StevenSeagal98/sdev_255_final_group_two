const router = require('express').Router()

router.get('/', (req, res) => res.render('index'))
router.get('/add-course', (req, res) => res.render('addCourse'))
router.use('/courses', require('./courses'))
router.use('/login', require('./login'))
router.use('/register', require('./register'))

module.exports = router