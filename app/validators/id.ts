import vine from '@vinejs/vine'

const id = () => vine.number().nonNegative()

export const idValidator = vine.create({
  id: id(),
})
