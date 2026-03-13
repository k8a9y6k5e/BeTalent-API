import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

//for public router
// - for user login
router.post('/login', [controllers.Users, 'login'])

// - to client/user make a create bought
router.post('/purchases', [controllers.Transactions, 'createTransaction'])

//for private routers

// - gateways
router
  .group(() => {
    router.put('/gateway/:id', [controllers.Gateways, 'putUpdate'])
    router.patch('/gateway/:id', [controllers.Gateways, 'patchUpdate'])
  })
  .use(middleware.auth())

// - clients
router
  .group(() => {
    router.post('/client', [controllers.Clients, 'createClient'])
    router.get('/client', [controllers.Clients, 'showClients'])
    router.get('/client/:id', [controllers.Clients, 'showClientsAndTransactions'])
  })
  .use(middleware.auth())

// - products
router
  .group(() => {
    router.post('/products', [controllers.Products, 'createProduct'])
  })
  .use(middleware.auth())

// - purchases
router
  .group(() => {
    router.get('/purchases', [controllers.Transactions, 'showTransactions'])
    router.get('/purchases/:id', [controllers.Transactions, 'detailedTransaction'])
    router.post('/purchases/:id/refund', [controllers.Transactions, 'refundTransaction'])
  })
  .use(middleware.auth())
