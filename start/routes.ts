import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

//for public router
// - for user login
router.post('/login', [controllers.Users, 'login'])

//for private routers
router.group(() => {}).use(middleware.auth())
