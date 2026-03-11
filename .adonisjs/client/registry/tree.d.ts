/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  users: {
    login: typeof routes['users.login']
  }
  gateways: {
    putUpdate: typeof routes['gateways.put_update']
    patchUpdate: typeof routes['gateways.patch_update']
  }
  clients: {
    createClient: typeof routes['clients.create_client']
  }
}
