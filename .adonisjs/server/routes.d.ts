import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'users.login': { paramsTuple?: []; params?: {} }
    'transactions.create_transaction': { paramsTuple?: []; params?: {} }
    'gateways.put_update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'gateways.patch_update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'clients.create_client': { paramsTuple?: []; params?: {} }
    'clients.show_clients': { paramsTuple?: []; params?: {} }
    'clients.show_clients_and_transactions': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'products.create_product': { paramsTuple?: []; params?: {} }
    'transactions.show_transactions': { paramsTuple?: []; params?: {} }
    'transactions.detailed_transaction': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'transactions.refund_transaction': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'users.login': { paramsTuple?: []; params?: {} }
    'transactions.create_transaction': { paramsTuple?: []; params?: {} }
    'clients.create_client': { paramsTuple?: []; params?: {} }
    'products.create_product': { paramsTuple?: []; params?: {} }
    'transactions.refund_transaction': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PUT: {
    'gateways.put_update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'gateways.patch_update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'clients.show_clients': { paramsTuple?: []; params?: {} }
    'clients.show_clients_and_transactions': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'transactions.show_transactions': { paramsTuple?: []; params?: {} }
    'transactions.detailed_transaction': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'clients.show_clients': { paramsTuple?: []; params?: {} }
    'clients.show_clients_and_transactions': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'transactions.show_transactions': { paramsTuple?: []; params?: {} }
    'transactions.detailed_transaction': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}