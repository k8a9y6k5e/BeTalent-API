import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'
import { productValidator } from '#validators/product'

export default class ProductsController {
  public async createProduct({ request, response }: HttpContext) {
    const data = await request.validateUsing(productValidator)

    data.amount *= 100 //to transform the value in R$ to cents

    if (await Product.query().where('name', data.name).first())
      throw new Error('Product already exist')

    await Product.create(data)

    response.created(data)
  }
}
