import vine from '@vinejs/vine'

const clientId = () => vine.number().positive().min(1)
const cardNumber = () =>
  vine
    .number()
    .positive()
    .transform((value) => String(value))
const productId = () => vine.number().positive().min(1)
const quantity = () => vine.number().positive().min(1)
const cvv = () =>
  vine
    .number()
    .positive()
    .min(1)
    .transform((value) => String(value))

export const transactionValidator = vine.compile(
  vine.object({
    clientId: clientId(),
    cardNumber: cardNumber(),
    productId: productId(),
    quantity: quantity(),
    cvv: cvv(),
  })
)
