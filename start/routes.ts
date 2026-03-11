import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

//for public router
// - for user login
router.post('/login', [controllers.Users, 'login'])

//for private routers

//gateways
router
  .group(() => {
    router.put('/gateway/:id', [controllers.Gateways, 'putUpdate'])
    router.patch('/gateway/:id', [controllers.Gateways, 'patchUpdate'])
  })
  .use(middleware.auth())

//clients
router
  .group(() => {
    router.post('/client', [controllers.Clients, 'createClient'])
  })
  .use(middleware.auth())

//products
router
  .group(() => {
    router.post('/products', [controllers.Products, 'createProduct'])
  })
  .use(middleware.auth())

// //products
// router.group(() => {
//  router.post('/products', [controllers.Products, 'createProduct'])
// })
