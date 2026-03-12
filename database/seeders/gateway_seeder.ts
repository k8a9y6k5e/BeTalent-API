import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Gateway from '#models/gateway'

export default class GatewaySeeder extends BaseSeeder {
  async run() {
    await Gateway.createMany([
      { name: 'gateway1', isActive: true, priority: 1 },
      { name: 'gateway2', isActive: true, priority: 2 },
    ])
  }
}
