import { BaseModel, column } from '@adonisjs/lucid/orm'
import type { DateTime } from 'luxon'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id!: number

  @column()
  public email!: string

  @column()
  public token!: string

  @column({ serializeAs: null })
  public password!: string

  @column.dateTime({ autoCreate: true })
  public createdAt!: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt!: DateTime
}
