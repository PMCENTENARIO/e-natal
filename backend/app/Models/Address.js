/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Address extends Model {
  tickets() {
    return this.hasMany('App/Models/Ticket');
  }
}

module.exports = Address;
