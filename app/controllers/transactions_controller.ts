import type { HttpContext } from '@adonisjs/core/http'
import { transactionValidator } from '#validators/transaction'
import Transaction from '#models/transaction'

export default class TransactionsController {
  public async createTransaction({ request, response }: HttpContext) {
    const data = request.validateUsing(transactionValidator)
  }
}
