import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Gateway from '#models/gateway'

export default class GatewaySeeder extends BaseSeeder {
  async run() {
    await Gateway.createMany([
      { name: 'gateway1', is_active: true, priority: 1 },
      { name: 'gateway2', is_active: true, priority: 2 },
    ])
  }
}
