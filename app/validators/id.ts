import vine from '@vinejs/vine'

const id = () => vine.number().positive()

export const paramValidator = vine.compile(
  vine.object({
    id: id(),
  })
)
