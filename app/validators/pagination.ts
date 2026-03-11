import vine from '@vinejs/vine'

const page = () => vine.number().nonNegative().min(1)
const limit = () => vine.number().nonNegative().min(1)

export const paginationValidator = vine.compile(
  vine.object({
    page: page(),
    limit: limit(),
  })
)
