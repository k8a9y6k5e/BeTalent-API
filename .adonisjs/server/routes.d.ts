import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'users.login': { paramsTuple?: []; params?: {} }
    'gateways.put_update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'gateways.patch_update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'users.login': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'gateways.put_update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'gateways.patch_update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}