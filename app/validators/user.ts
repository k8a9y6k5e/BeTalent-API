//validator
import vine from '@vinejs/vine'

const email = () => vine.string().email()
const password = () => vine.string().minLength(6)
const role = () => vine.enum(['admin', 'manager', 'finance', 'user'])

export const loginValidator = vine.create({
  email: email(),
  password: password(),
  role: role(),
})
