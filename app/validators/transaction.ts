import vine from '@vinejs/vine'

const clientId = () => vine.number().positive().min(1)
const gatewayId = () => vine.number().positive().min(1)
const status = () => vine.enum(['pending', 'paid', 'failed', 'refunded'])
const amount = () => vine.number().decimal([0, 2]).positive()
const cardLastNumbers = () => vine.number().positive()
const productId = () => vine.number().positive().min(1)
const quantity = () => vine.number().positive().min(1)

export const transactionValidator = vine.compile(
  vine.object({
    clientId: clientId(),
    gatewayId: gatewayId(),
    status: status(),
    amount: amount(),
    cardLastNumbers: cardLastNumbers(),
    productId: productId(),
    quantity: quantity(),
  })
)
