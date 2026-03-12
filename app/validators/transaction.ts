import vine from '@vinejs/vine'

const clientId = () => vine.number().positive().min(1)
const cardLastNumbers = () => vine.number().positive()
const productId = () => vine.number().positive().min(1)
const quantity = () => vine.number().positive().min(1)
const cvv = () => vine.number().positive().min(1)

export const transactionValidator = vine.compile(
  vine.object({
    clientId: clientId(),
    cardLastNumbers: cardLastNumbers(),
    productId: productId(),
    quantity: quantity(),
    cvv: cvv(),
  })
)
