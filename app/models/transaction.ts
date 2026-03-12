import { TransactionSchema } from '#database/schema'
import { column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Transaction extends TransactionSchema {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare clientId: number | null

  @column()
  declare gatewayId: number | null

  @column()
  declare externalId: number | null

  @column()
  declare status: string | null

  @column()
  declare amount: number | null

  @column()
  declare cardLastNumbers: number | null

  @column()
  declare productId: number | null

  @column()
  declare quantity: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime<boolean> | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime<boolean> | null
}
