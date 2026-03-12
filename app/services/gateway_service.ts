import { Gateway1Adapter } from '#services/gateways/gateway1_adapter'
import { Gateway2Adapter } from '#services/gateways/gateway2_adapter'
import type { ChargeData, ChargeResult, GatewayAdapter } from '#services/gateways/interfaces'
import Gateway from '#models/gateway'

export class GatewayService {
  //to access the correct gateway
  private createAdapters(gatewayName: string): GatewayAdapter {
    const adapters: Record<string, GatewayAdapter> = {
      gateway1: new Gateway1Adapter(),
      gateway2: new Gateway2Adapter(),
    }

    return adapters[gatewayName]
  }

  async charge(data: ChargeData): Promise<ChargeResult & { gatewayId: number }> {
    const gateways = await Gateway.query().where('isActive', true).orderBy('priority', 'asc')

    let lastError: Error | null = null

    for (const gateway of gateways) {
      try {
        const adapter = this.createAdapters(gateway.name)
        const result = await adapter.charge(data)

        return { ...result, gatewayId: gateway.id }
      } catch (err) {
        lastError = err
      }
    }

    throw lastError ?? new Error('All gateways failed')
  }

  async refund(externalId: string) {
    const gateways = await Gateway.query().where('isActive', true).orderBy('priority', 'asc')

    let lastError: Error | null = null

    for (const gateway of gateways) {
      try {
        const adapter = this.createAdapters(gateway.name)
        await adapter.refund(externalId)

        return null //just to come back if be correct
      } catch (err) {
        lastError = err
      }
    }

    throw lastError ?? new Error('All gateways failed')
  }
}
