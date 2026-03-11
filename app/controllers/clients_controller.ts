import type { HttpContext } from '@adonisjs/core/http'
import Client from '#models/client'
import { clientValidator } from '#validators/client'

export default class ClientsController {
  public async createClient({ request, response }: HttpContext) {
    const data = await request.validateUsing(clientValidator)

    await Client.create(data)

    response.created(data)
  }

  public async showClients({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    const data = await Client.query().paginate(page, limit)

    response.ok(data)
  }
}
