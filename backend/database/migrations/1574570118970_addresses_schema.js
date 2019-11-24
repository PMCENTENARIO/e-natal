/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddressesSchema extends Schema {
  up() {
    this.create('addresses', table => {
      table.increments();
      table.string('street').notNullable();
      table.integer('number').notNullable();
      table.string('neighborhood').notNullable();
      table.string('zip_code').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('addresses');
  }
}

module.exports = AddressesSchema;
