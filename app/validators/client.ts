import vine from '@vinejs/vine'

const name = () => vine.string().trim()
const email = () => vine.string().email()

export const clientValidator = vine.create({
  name: name(),
  email: email(),
})
