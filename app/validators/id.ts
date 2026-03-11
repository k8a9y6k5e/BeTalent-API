import vine from '@vinejs/vine'

export const paramValidator = vine.compile(vine.object({ id: vine.number().positive() }))
