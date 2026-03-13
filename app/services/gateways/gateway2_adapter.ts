import type { ChargeData, ChargeResult, GatewayAdapter } from './interfaces.ts'

export class Gateway2Adapter implements GatewayAdapter {
  private headers = {
    'Gateway-Auth-Token': 'tk_f2198cc671b5289fa856',
    'Gateway-Auth-Secret': '3d15e8ed6131446ea7e3456728b1211f',
    'Content-Type': 'application/json',
  }

  async charge(data: ChargeData): Promise<ChargeResult> {
    const response = await fetch('http://localhost:3002/transacoes', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        valor: data.amount,
        nome: data.name,
        email: data.email,
        numeroCartao: String(data.cardNumber),
        cvv: String(data.cvv),
      }),
    })

    if (!response.ok) throw new Error('Payment failed')

    const result = (await response.json()) as { id: string; status: string }

    return {
      externalId: result.id,
      status: result.status,
    }
  }

  async refund(externalId: string): Promise<void> {
    await fetch('http://localhost:3002/transacoes/reembolso', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ id: externalId }),
    })
  }

  async list() {
    const response = await fetch('http://localhost:3002/transacoes', {
      method: 'GET',
      headers: this.headers,
    })

    return await response.json()
  }
}
