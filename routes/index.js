const router = require('express').Router()

router.get('/', (req, res) => res.render('index'))
router.get('/add-course', (req, res) => res.render('addCourse'))
router.use('/courses', require('./courses'))
router.use('/login', require('./login'))
router.use('/register', require('./register'))
router.use('/dashboard', require('./dashboard'))
router.use('/enroll', require('./enroll'))
router.use('/dropCrouse', require('./dropCrouse'))
router.use('/schedule', require('./schedule'))

module.exports = router