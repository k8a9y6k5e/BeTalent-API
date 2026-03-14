//define which values/methods need to has
export interface GatewayAdapter {
  charge(data: ChargeData): Promise<ChargeResult>
  refund(externalId: string): Promise<void>
  list(): Promise<unknown>
}

//the value arguments need to receive
export interface ChargeData {
  amount: number
  name: string
  email: string
  cardNumber: string
  cvv: string
}

//values which the refund return
export interface ChargeResult {
  externalId: string
  status: string
}
