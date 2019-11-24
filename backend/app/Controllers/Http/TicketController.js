const Database = use('Database');
const Address = use('App/Models/Address');
const Ticket = use('App/Models/Ticket');
const Person = use('App/Models/Person');
const QRCode = require('qrcode');

class TicketController {
  async index() {
    const tickets = await Ticket.query()
      .with('user')
      .with('type')
      .with('school')
      .with('address')
      .fetch();

    return tickets;
  }

  async store({ request, response, auth }) {
    const data = request.only([
      'type_id',
      'childen',
      'age',
      'school_id',
      'name_parents',
      'document',
      'phone',
      'delivery',
      'observation',
      'street',
      'number',
      'neighborhood',
    ]);

    const childenExists = await Ticket.findBy('childen', data.childen);
    if (childenExists) {
      const {
        password,
        person_id,
        delivery,
        qrcode,
        created_at,
      } = childenExists;

      return response.status(401).send([
        {
          message: 'Criança já existente na base de dados. ',
          password,
          person_id,
          delivery,
          qrcode,
          created_at,
        },
      ]);
    }

    let person;
    if (data.name_parants !== '') {
      person = await Person.findOrCreate({
        name_parents: data.name_parents,
        document: data.document,
        phone: data.phone,
      });
    }

    const address = await Address.findOrCreate({
      street: data.street,
      number: data.number,
      neighborhood: data.neighborhood,
      zip_code: data.zip_code ? data.zip_code : '86630000',
    });

    const password = await Database.from('tickets').getMax('id');

    const now = new Date();
    let qrcode = '';
    const qrcodeValidate = `WEBNATAL${now.getFullYear()}${now.getTime()}`;

    QRCode.toString(qrcodeValidate, { type: 'terminal' }, (err, url) => {
      qrcode = url;
    });

    const ticket = await Ticket.create({
      type_id: data.type_id,
      childen: data.childen,
      age: data.age,
      school_id: data.school_id,
      person_id: person ? person.id : 0,
      delivery: data.delivery,
      observation: data.observation,
      password: password + 1,
      address_id: address.id,
      user_id: auth.user.id,
      qrcode: qrcodeValidate,
    });

    return [
      {
        ticket,
        qrcode,
      },
    ];
  }

  async show({ params }) {
    const ticket = await Ticket.findOrFail(params.id);

    await ticket.load('school');
    await ticket.load('person');
    await ticket.load('address');
    await ticket.load('user');
    await ticket.load('type');

    return ticket;
  }

  async update({ params, request, response }) {}

  async destroy({ params }) {
    const ticket = await Ticket.findOrFail(params.id);

    await ticket.delete();
  }
}

module.exports = TicketController;
