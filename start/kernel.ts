import router from '@adonisjs/core/services/router'
import server from '@adonisjs/core/services/server'

server.use([() => import('@adonisjs/cors/cors_middleware')])

router.use([
  () => import('@adonisjs/core/bodyparser_middleware'),
  () => import('@adonisjs/session/session_middleware'),
  () => import('@adonisjs/shield/shield_middleware'),
  () => import('@adonisjs/auth/initialize_auth_middleware'),
])
