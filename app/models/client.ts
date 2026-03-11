import { ClientSchema } from '#database/schema'
import { column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Client extends ClientSchema {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare email: string

  @column.dateTime({ autoCreate: true })
  public created_at!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at!: DateTime
}
