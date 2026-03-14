import type { HttpContext } from '@adonisjs/core/http'
import { transactionValidator } from '#validators/transaction'
import Transaction from '#models/transaction'
import Client from '#models/client'
import Product from '#models/product'
import { GatewayService } from '#services/gateway_service'
import { paginationValidator } from '#validators/pagination'
import { paramValidator } from '#validators/id'

export default class TransactionsController {
  private cardFormatValidator(cardNumber: string, cvv: string) {
    if (cardNumber.length !== 16 || cvv.length !== 3)
      throw new Error('Invalid card informations format')
  }

  private async getInformations(
    clientId: number,
    productId: number
  ): Promise<{ amount: number; name: string; email: string }> {
    const { name } = await Client.query()
      .where('id', clientId)
      .select('name')
      .pojo<{ name: string }>()
      .firstOrFail()
    const { email } = await Client.query()
      .where('id', clientId)
      .select('email')
      .pojo<{ email: string }>()
      .firstOrFail()
    const { amount } = await Product.query()
      .where('id', productId)
      .select('amount')
      .pojo<{ amount: number }>()
      .firstOrFail()

    return {
      amount: amount,
      name: name,
      email: email,
    }
  }

  public async createTransaction({ request, response }: HttpContext) {
    const data = await request.validateUsing(transactionValidator)

    this.cardFormatValidator(data.cardNumber, data.cvv)

    //verify if id informates exist
    if (!(await Product.query().where('id', data.productId)))
      response.badRequest("Product entered doesn't exist")

    if (!(await Client.query().where('id', data.clientId)))
      response.badRequest("Client entered doesn't exist")

    const informations = await this.getInformations(data.clientId, data.productId)

    const chargeData = {
      name: informations.name,
      amount: informations.amount * data.quantity,
      email: informations.email,
      cardNumber: data.cardNumber,
      cvv: data.cvv,
    }

    const gatewayService = new GatewayService()

    const gatewayResult = await gatewayService.charge(chargeData)

    const cardLastNumbers: number = Number(data.cardNumber.toString().slice(-4))

    await Transaction.create({
      clientId: data.clientId,
      gatewayId: gatewayResult.gatewayId,
      externalId: gatewayResult.externalId,
      status: gatewayResult.status,
      amount: informations.amount,
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

  public async detailedTransaction({ params, response }: HttpContext) {
    const { id } = await paramValidator.validate(params)

    const data = await Transaction.query()
      .where('id', id)
      .preload('client')
      .preload('gateway', (query) => query.select('name'))
      .preload('product')
      .select(
        'status',
        'amount',
        'cardLastNumbers',
        'quantity',
        'clientId',
        'gatewayId',
        'productId'
      )
      .firstOrFail()

    response.ok(data)
  }

  public async refundTransaction({ params, response }: HttpContext) {
    const { id } = await paramValidator.validate(params)

    //get an object with the value externalId
    const informations = await Transaction.query()
      .where('id', id)
      .select('externalId')
      .pojo<{ externalId: string }>()
      .firstOrFail()

    await new GatewayService().refund(informations.externalId)

    await Transaction.query().where('id', id).update({ status: 'refunded' })

    response.ok('Purchase refund')
  }
}
