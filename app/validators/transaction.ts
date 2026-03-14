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

//transform is used because the functions which use cvv and cardNumber require a string
//but to validate need to confirm it's a number

export const transactionValidator = vine.compile(
  vine.object({
    clientId: clientId(),
    cardNumber: cardNumber(),
    productId: productId(),
    quantity: quantity(),
    cvv: cvv(),
  })
)
