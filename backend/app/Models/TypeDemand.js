/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TypeDemand extends Model {
  tickets() {
    return this.hasMany('App/Models/Ticket');
  }
}

module.exports = TypeDemand;
