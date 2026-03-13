import type { HttpContext } from '@adonisjs/core/http'
import Client from '#models/client'
import { clientValidator } from '#validators/client'
import { paginationValidator } from '#validators/pagination'
import { paramValidator } from '#validators/id'

export default class ClientsController {
  public async createClient({ request, response }: HttpContext) {
    const data = await request.validateUsing(clientValidator)

    if (await Client.query().where('email', data.email).first())
      throw new Error('Email used already exist')

    await Client.create(data)

    response.created(data)
  }

  public async showClients({ request, response }: HttpContext) {
    const { page = 1, limit = 10 } = await request.validateUsing(paginationValidator)

    const data = await Client.query().select('id', 'name', 'email').paginate(page, limit)

    response.ok(data)
  }

  public async showClientsAndTransactions({ request, response }: HttpContext) {
    const { id } = await request.validateUsing(paramValidator)

    const data = await Client.query().where('id', id).preload('transactions').firstOrFail()

    response.ok(data)
  }
}
