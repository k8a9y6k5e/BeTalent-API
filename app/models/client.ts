import { ClientSchema } from '#database/schema'
import { column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Transaction from './transaction.ts'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Client extends ClientSchema {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare email: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime<boolean> | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime<boolean> | null

  @hasMany(() => Transaction)
  declare transactions: HasMany<typeof Transaction>
}
