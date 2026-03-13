/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'users.login': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['users.login']['types'],
  },
  'transactions.create_transaction': {
    methods: ["POST"],
    pattern: '/purchases',
    tokens: [{"old":"/purchases","type":0,"val":"purchases","end":""}],
    types: placeholder as Registry['transactions.create_transaction']['types'],
  },
  'gateways.put_update': {
    methods: ["PUT"],
    pattern: '/gateway/:id',
    tokens: [{"old":"/gateway/:id","type":0,"val":"gateway","end":""},{"old":"/gateway/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['gateways.put_update']['types'],
  },
  'gateways.patch_update': {
    methods: ["PATCH"],
    pattern: '/gateway/:id',
    tokens: [{"old":"/gateway/:id","type":0,"val":"gateway","end":""},{"old":"/gateway/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['gateways.patch_update']['types'],
  },
  'clients.create_client': {
    methods: ["POST"],
    pattern: '/client',
    tokens: [{"old":"/client","type":0,"val":"client","end":""}],
    types: placeholder as Registry['clients.create_client']['types'],
  },
  'clients.show_clients': {
    methods: ["GET","HEAD"],
    pattern: '/client',
    tokens: [{"old":"/client","type":0,"val":"client","end":""}],
    types: placeholder as Registry['clients.show_clients']['types'],
  },
  'clients.show_clients_and_transactions': {
    methods: ["GET","HEAD"],
    pattern: '/client/:id',
    tokens: [{"old":"/client/:id","type":0,"val":"client","end":""},{"old":"/client/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['clients.show_clients_and_transactions']['types'],
  },
  'products.create_product': {
    methods: ["POST"],
    pattern: '/products',
    tokens: [{"old":"/products","type":0,"val":"products","end":""}],
    types: placeholder as Registry['products.create_product']['types'],
  },
  'transactions.show_transactions': {
    methods: ["GET","HEAD"],
    pattern: '/purchases',
    tokens: [{"old":"/purchases","type":0,"val":"purchases","end":""}],
    types: placeholder as Registry['transactions.show_transactions']['types'],
  },
  'transactions.detailed_transaction': {
    methods: ["GET","HEAD"],
    pattern: '/purchases/:id',
    tokens: [{"old":"/purchases/:id","type":0,"val":"purchases","end":""},{"old":"/purchases/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['transactions.detailed_transaction']['types'],
  },
  'transactions.refund_transaction': {
    methods: ["POST"],
    pattern: '/purchases/:id/refunc',
    tokens: [{"old":"/purchases/:id/refunc","type":0,"val":"purchases","end":""},{"old":"/purchases/:id/refunc","type":1,"val":"id","end":""},{"old":"/purchases/:id/refunc","type":0,"val":"refunc","end":""}],
    types: placeholder as Registry['transactions.refund_transaction']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
