const router = require('express').Router()

//import controller
const UserController = require('./controllers/UserController')
const LinkController = require('./controllers/LinkController')
const CategoriaController = require('./controllers/CategoriaController')



router.post('/', (req, res) => res.json({sucess: true}))

//User Controller
router.post('/login', UserController.login)
router.post('/create', UserController.create)

//Url Controller
router.post('/getLink', LinkController.getLink)
router.post('/createLink', LinkController.createLink)

//Categoria Controller
router.post('/getCategoria', CategoriaController.getCategoria)
router.post('/createCategoria', CategoriaController.createCategoria)

module.exports = router