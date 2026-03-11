/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'users.login': {
    methods: ["POST"]
    pattern: '/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/users_controller').default['login']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/users_controller').default['login']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'gateways.put_update': {
    methods: ["PUT"]
    pattern: '/gateway/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/gateway').gatewaysValidator)>|InferInput<(typeof import('#validators/id').paramValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/gateway').gatewaysValidator)>|InferInput<(typeof import('#validators/id').paramValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/gateways_controller').default['putUpdate']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/gateways_controller').default['putUpdate']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'gateways.patch_update': {
    methods: ["PATCH"]
    pattern: '/gateway/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/gateway').gatewaysValidator)>|InferInput<(typeof import('#validators/id').paramValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/gateway').gatewaysValidator)>|InferInput<(typeof import('#validators/id').paramValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/gateways_controller').default['patchUpdate']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/gateways_controller').default['patchUpdate']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'clients.create_client': {
    methods: ["POST"]
    pattern: '/client'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/client').clientValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/client').clientValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/clients_controller').default['createClient']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/clients_controller').default['createClient']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'clients.show_clients': {
    methods: ["GET","HEAD"]
    pattern: '/client'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: ExtractQueryForGet<InferInput<(typeof import('#validators/pagination').paginationValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/clients_controller').default['showClients']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/clients_controller').default['showClients']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'products.create_product': {
    methods: ["POST"]
    pattern: '/products'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/product').productValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/product').productValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/products_controller').default['createProduct']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/products_controller').default['createProduct']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
}
