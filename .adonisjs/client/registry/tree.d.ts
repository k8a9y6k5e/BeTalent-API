/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  users: {
    login: typeof routes['users.login']
  }
}
