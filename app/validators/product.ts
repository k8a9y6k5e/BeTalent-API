import vine from '@vinejs/vine'

const name = () => vine.string().trim()
const amount = () => vine.number().positive()

export const productValidator = vine.create({
  name: name(),
  amount: amount(),
})
