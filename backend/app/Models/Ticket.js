/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Ticket extends Model {
  user() {
    return this.belongsTo('App/Models/User');
  }

  person() {
    return this.belongsTo('App/Models/Person');
  }

  type() {
    return this.belongsTo('App/Models/TypeDemand');
  }

  school() {
    return this.belongsTo('App/Models/School');
  }

  address() {
    return this.belongsTo('App/Models/Address');
  }
}

module.exports = Ticket;
