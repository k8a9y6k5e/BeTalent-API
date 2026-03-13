/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  users: {
    login: typeof routes['users.login']
  }
  transactions: {
    createTransaction: typeof routes['transactions.create_transaction']
    showTransactions: typeof routes['transactions.show_transactions']
    detailedTransaction: typeof routes['transactions.detailed_transaction']
    refundTransaction: typeof routes['transactions.refund_transaction']
  }
  gateways: {
    putUpdate: typeof routes['gateways.put_update']
    patchUpdate: typeof routes['gateways.patch_update']
  }
  clients: {
    createClient: typeof routes['clients.create_client']
    showClients: typeof routes['clients.show_clients']
    showClientsAndTransactions: typeof routes['clients.show_clients_and_transactions']
  }
  products: {
    createProduct: typeof routes['products.create_product']
  }
}
