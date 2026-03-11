import type { HttpContext } from '@adonisjs/core/http'
import Client from '#models/client'
import { clientValidator } from '#validators/client'

export default class ClientsController {
  public async createClient({ request, response }: HttpContext) {
    const data = await request.validateUsing(clientValidator)

    await Client.create(data)

    response.created(data)
  }
}
