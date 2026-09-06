import type { HttpContext } from '@adonisjs/core/http'

export default class QuickViewController {
  async store({ session, response }: HttpContext) {
    session.put('isQuickView', true)

    return response.redirect().toRoute('home')
  }

    async destroy({ session, response }: HttpContext) {
    session.forget('isQuickView')

    return response.redirect('/login')
  }
}