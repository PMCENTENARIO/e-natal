const Address = use('App/Models/Address');

class AddressController {
  async index() {
    const addresses = await Address.all();

    return addresses;
  }

  async store({ request, response }) {}

  async update({ params, request }) {
    const data = request.only(['street', 'number', 'neighborhood', 'zip_code']);
    const address = await Address.findOrFail(params.id);

    address.marge(data);
    await address.save();

    return address;
  }

  async destroy({ params }) {
    const address = await Address.findOrFail(params.id);

    await address.delete();
  }
}

module.exports = AddressController;
