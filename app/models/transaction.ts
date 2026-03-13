import { TransactionSchema } from '#database/schema'
import { column, belongsTo } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Client from './client.ts'
import { BelongsTo } from '@adonisjs/lucid/types/relations'
import Gateway from './gateway.ts'
import Product from './product.ts'

export default class Transaction extends TransactionSchema {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare clientId: number | null

  @belongsTo(() => Client)
  declare client: BelongsTo<typeof Client>

  @column()
  declare gatewayId: number | null

  @belongsTo(() => Gateway)
  declare gateway: BelongsTo<typeof Gateway>

  @column()
  declare externalId: string | null

  @column()
  declare status: string | null

  @column()
  declare amount: number | null

  @column()
  declare cardLastNumbers: number | null

  @column()
  declare productId: number | null

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>

  @column()
  declare quantity: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime<boolean> | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime<boolean> | null
}
