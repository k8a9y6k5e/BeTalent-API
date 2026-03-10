// import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

//for users
router.group(() => {
  router.post('/login', controllers.Users)
})
