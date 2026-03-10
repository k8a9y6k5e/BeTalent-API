// import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
// import { controllers } from '#generated/controllers'
import { UsersController } from '#controllers/users_controller'

//for users
router.post('/login', new UsersController().login)
