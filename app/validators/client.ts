import vine from '@vinejs/vine'

const name = () => vine.string().trim().toLowerCase()
const email = () => vine.string().email()

export const clientValidator = vine.compile(
  vine.object({
    name: name(),
    email: email(),
  })
)
