//validator
import vine from '@vinejs/vine'

const email = () => vine.string().email()
const password = () => vine.string().minLength(6)
const role = () => vine.enum(['admin', 'manager', 'finance', 'user'])
const token = () => vine.string().jwt()

export const loginValidator = vine.create({
  email: email(),
  token: token(),
  password: password(),
  role: role(),
})
