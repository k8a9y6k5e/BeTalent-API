import type { ChargeData, ChargeResult, GatewayAdapter } from './interfaces.ts'

export class Gateway1Adapter implements GatewayAdapter {
  private token: string | null = null

  private async authenticate() {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'dev@betalent.tech',
        token: 'FEC9BB078BF338F464F96B48089EB498',
      }),
    })

    const data = (await response.json()) as { token: string }

    this.token = data.token
  }

  async charge(data: ChargeData): Promise<ChargeResult> {
    await this.authenticate()

    const response = await fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${this.token}` },
      body: JSON.stringify({
        amount: data.amount,
        name: data.name,
        email: data.email,
        cardNumber: data.cardNumber,
        cvv: data.cvv,
      }),
    })

    if (!response.ok) throw new Error('Payment failed')

    const result = (await response.json()) as { id: number; status: string }

    return {
      externalId: result.id,
      status: result.status,
    }
  }

  async refund(externalId: string) {
    await this.authenticate()

    await fetch(`http://localhost:3001/transactions/${externalId}/charge_back`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${this.token}` },
    })
  }

  async list() {
    await this.authenticate()

    const response = await fetch('http://localhost:3001/transactions', {
      method: 'GET',
      headers: { Authorization: `Bearer ${this.token}` },
    })

    return await response.json()
  }
}
