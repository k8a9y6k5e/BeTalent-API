import vine from '@vinejs/vine'

const name = () => vine.string()
const email = () => vine.string().email()

export const clientValidator = vine.create({
  name: name(),
  email: email(),
})
