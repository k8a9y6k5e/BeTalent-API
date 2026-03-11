import type { HttpContext } from '@adonisjs/core/http'
import Gateways from '#models/gateway'
import { gatewaysValidator } from '#validators/gateway'
import { paramValidator } from '#validators/id'

export default class GatewaysController {
  public async putUpdate({ request, response, params }: HttpContext) {
    const { id } = await paramValidator.validate(params)

    const data = await request.validateUsing(gatewaysValidator)

    const gateway = await Gateways.findOrFail(id)

    gateway.is_active = data.is_active!

    gateway.priority = data.priority!

    await gateway.save()

    return response.ok({ gateway })
  }

  public async patchUpdate({ request, response, params }: HttpContext) {
    const { id } = await paramValidator.validate(params)

    const data = await request.validateUsing(gatewaysValidator)

    const gateway = await Gateways.findOrFail(id)

    if (data.is_active !== undefined || data.is_active !== null) {
      gateway.is_active = data.is_active!
    }

    if (data.priority) {
      gateway.priority = data.priority
    }

    return response.ok({ gateway })
  }
}
