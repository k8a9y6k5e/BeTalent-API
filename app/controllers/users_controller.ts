import type { HttpContext } from '@adonisjs/core/http'
import { loginValidator } from '#validators/user'
import User from '#models/user'

export default class UsersController {
  public async login({ request, auth, response }: HttpContext) {
    const data = await request.validateUsing(loginValidator)

    //verify if the user already exist, if not exist create the user
    if (!(await User.query().select().where({ email: data.email }).first())) {
      await User.create(data)
    }

    const user = await User.query().where('email', data.email).firstOrFail()

    //verify if user not exist
    if (!user) {
      return { error: 'Invalid values/credentials' }
    }

    const jwt = await auth.use('api').createToken(user)

    return response.ok({ token: jwt })
  }
}
