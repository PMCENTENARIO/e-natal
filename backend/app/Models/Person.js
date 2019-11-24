/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Person extends Model {
  tickets() {
    return this.hasMany('App/Models/Ticket');
  }
}

module.exports = Person;
