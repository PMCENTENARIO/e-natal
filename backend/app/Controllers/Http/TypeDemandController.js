const TypeDemand = use('App/Models/TypeDemand');
class TypeDemandController {
  async index() {
    const demands = await TypeDemand.all();

    return demands;
  }

  async store({ request, response }) {
    const data = request.only(['title', 'description']);

    let typeDemands = TypeDemand.findBy('title', data.title);

    if (typeDemands) {
      return [
        {
          message: 'Título do campo já existente',
          field: 'Título',
          validation: 'Único',
        },
      ];
    }

    typeDemands = await TypeDemand.create(data);
    return typeDemands;
  }

  async update({ request, params }) {
    const typeDemands = await TypeDemand.findOrFail(params.id);
    const data = request.only(['title', 'description']);

    typeDemands.merge(data);

    await typeDemands.save();

    return typeDemands;
  }

  async destroy({ params }) {
    const typeDemands = TypeDemand.findOrFail(params.id);

    await typeDemands.delete();
  }
}

module.exports = TypeDemandController;
