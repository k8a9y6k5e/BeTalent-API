export interface GatewayAdapter {
  charge(data: ChargeData): Promise<ChargeResult>
  refund(externalId: string): Promise<void>
  list(): Promise<unknown>
}

export interface ChargeData {
  amount: number
  name: string
  email: string
  cardNumber: number
  cvv: number
}

export interface ChargeResult {
  externalId: number
  status: string
}
