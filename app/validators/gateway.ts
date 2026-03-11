import vine from '@vinejs/vine'

const isActive = () => vine.boolean().optional().nullable()
const priority = () => vine.number().optional().nullable()

export const gatewaysValidator = vine.compile(
  vine.object({
    is_active: isActive(),
    priority: priority(),
  })
)
