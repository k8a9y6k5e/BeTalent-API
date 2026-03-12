import type { HttpContext } from '@adonisjs/core/http'
import { transactionValidator } from '#validators/transaction'
import Transaction from '#models/transaction'
import Client from '#models/client'
import Product from '#models/product'
import { GatewayService } from '#services/gateway_service'
import { paginationValidator } from '#validators/pagination'

export default class TransactionsController {
  public async createTransaction({ request, response }: HttpContext) {
    const data = await request.validateUsing(transactionValidator)

    if (!(await Product.query().where('id', data.productId)))
      response.badRequest("Product entered doesn't exist")

    if (!(await Client.query().where('id', data.clientId)))
      response.badRequest("Client entered doesn't exist")

    const amount = Number(
      await Product.query().where('id', data.productId).select('amount').firstOrFail()
    )

    const cardLastNumbers: number = Number(data.cardNumber.toString().slice(-4))

    const chargeData = {
      name: String(await Client.query().where('id', data.clientId).select('name').firstOrFail()),
      amount: amount,
      email: String(await Client.query().where('id', data.clientId).select('email').firstOrFail()),
      cardNumber: data.cardNumber,
      cvv: data.cvv,
    }

    const gatewayResult = await new GatewayService().charge(chargeData)

    await Transaction.create({
      clientId: data.clientId,
      gatewayId: gatewayResult.gatewayId,
      externalId: gatewayResult.externalId,
      status: gatewayResult.status,
      amount: amount,
      cardLastNumbers: cardLastNumbers,
      productId: data.productId,
      quantity: data.quantity,
    })

    response.created('Transaction made')
  }

  public async showTransactions({ request, response }: HttpContext) {
    const { page = 1, limit = 10 } = await request.validateUsing(paginationValidator)

    const data = await Transaction.query()
      .select('id', 'clientId', 'status', 'amount', 'cardLastNumbers', 'productId', 'quantity')
      .paginate(page, limit)

    response.ok(data)
  }
}
