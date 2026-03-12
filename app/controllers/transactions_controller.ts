import type { HttpContext } from '@adonisjs/core/http'
import { transactionValidator } from '#validators/transaction'
import Transaction from '#models/transaction'
import Client from '#models/client'
import Product from '#models/product'

export default class TransactionsController {
  public async createTransaction({ request, response }: HttpContext) {
    const data = await request.validateUsing(transactionValidator)

    if (!(await Product.query().where('id', data.productId)))
      response.badRequest("Product entered doesn't exist")

    if (!(await Client.query().where('id', data.clientId)))
      response.badRequest("Client entered doesn't exist")

    const amount = await Product.query().where('id', data.productId).select('amount').first()

    const cardLastNumbers: number = Number(data.cardNumber.toString().slice(-4))

    await Transaction.create({
      clientId: data.clientId,
      amount: Number(amount),
      cardLastNumbers: cardLastNumbers,
      productId: data.productId,
      quantity: data.quantity,
    })

    response.created('Transaction made')
  }
}
