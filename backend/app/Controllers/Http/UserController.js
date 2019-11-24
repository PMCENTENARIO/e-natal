/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use('App/Models/User');
const crypto = require('crypto');

class UserController {
  async index({ request, response }) {
    const users = await User.all();

    return users;
  }

  async store({ request, response }) {}

  async show({ params, request, response, view }) {}

  async update({ params, request, response, auth }) {
    try {
      if (auth.user.profile < 2) {
        return response.status(401).send({
          error: {
            message: 'Este perfil não é autorizado para está operação',
          },
        });
      }

      const { email, password } = request.all();
      const user = await User.findByOrFail('email', email);
      user.password = password;
      await user.save();
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro ao atualizar usuário' } });
    }
  }

  async destroy({ params, request, response }) {}
}

module.exports = UserController;
