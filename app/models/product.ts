import { ProductSchema } from '#database/schema'
import { column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Product extends ProductSchema {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare amount: number //in cents - value * 100

  @column.dateTime({ autoCreate: true })
  public created_at!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at!: DateTime
}
