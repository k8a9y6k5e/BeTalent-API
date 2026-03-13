export interface GatewayAdapter {
  charge(data: ChargeData): Promise<ChargeResult>
  refund(externalId: string): Promise<void>
  list(): Promise<unknown>
}

export interface ChargeData {
  amount: number
  name: string
  email: string
  cardNumber: string
  cvv: string
}

export interface ChargeResult {
  externalId: string
  status: string
}
