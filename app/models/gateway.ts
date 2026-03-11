import { GatewaySchema } from '#database/schema'
import { column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Gateway extends GatewaySchema {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  public is_active!: boolean

  @column()
  declare priority: number

  @column.dateTime({ autoCreate: true })
  public created_at!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at!: DateTime
}
