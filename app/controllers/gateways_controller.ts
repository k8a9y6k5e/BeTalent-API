import type { HttpContext } from '@adonisjs/core/http'
import Gateways from '#models/gateway'
import { gatewaysValidator } from '#validators/gateway'
import { paramValidator } from '#validators/id'

export default class GatewaysController {
  public async putUpdate({ request, response, params }: HttpContext) {
    const { id } = await paramValidator.validate(params)

    const data = await request.validateUsing(gatewaysValidator)

    if (
      data.isActive === undefined ||
      data.priority === undefined ||
      data.isActive === null ||
      data.priority === null
    ) {
      return response.badRequest("Importants values to update doesn't exist")
    }

    const gateway = await Gateways.findOrFail(id)

    gateway.isActive = data.isActive!

    await _swapPriority(data.priority!, gateway)

    await gateway.save()

    return response.ok({ gateway })
  }

  public async patchUpdate({ request, response, params }: HttpContext) {
    const { id } = await paramValidator.validate(params)

    const data = await request.validateUsing(gatewaysValidator)

    const gateway = await Gateways.findOrFail(id)

    if (data.isActive !== undefined && data.isActive !== null) {
      gateway.isActive = data.isActive!
    }

    if (data.priority) {
      await _swapPriority(data.priority!, gateway)
    }

    await gateway.save()

    return response.ok({ gateway })
  }
}

async function _swapPriority(priority: number, toUpdate: Gateways) {
  const samePriority = await Gateways.findBy({ priority: priority })

  if (samePriority) {
    samePriority.priority = toUpdate.priority
    await samePriority.save()
  }

  toUpdate.priority = priority
}
