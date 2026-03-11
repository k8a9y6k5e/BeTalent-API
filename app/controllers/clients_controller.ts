import type { HttpContext } from '@adonisjs/core/http'
import Client from '#models/client'
import { clientValidator } from '#validators/client'
import { paginationValidator } from '#validators/pagination'

export default class ClientsController {
  public async createClient({ request, response }: HttpContext) {
    const data = await request.validateUsing(clientValidator)

    await Client.create(data)

    response.created(data)
  }

  public async showClients({ request, response }: HttpContext) {
    const { page = 1, limit = 10 } = await request.validateUsing(paginationValidator)

    const data = await Client.query().select('id', 'name', 'email').paginate(page, limit)

    response.ok(data)
  }
}
