//validator
import vine from '@vinejs/vine'

const email = () => vine.string().trim().email()
const password = () => vine.string().trim().minLength(6)
const role = () => vine.enum(['admin', 'manager', 'finance', 'user'])

export const loginValidator = vine.compile(
  vine.object({
    email: email(),
    password: password(),
    role: role(),
  })
)
