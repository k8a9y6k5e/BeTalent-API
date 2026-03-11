import vine from '@vinejs/vine'

const name = () => vine.string().trim()
const amount = () => vine.number().decimal([0, 2]).positive()

export const productValidator = vine.compile(
  vine.object({
    name: name(),
    amount: amount(),
  })
)
