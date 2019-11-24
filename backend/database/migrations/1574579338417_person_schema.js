/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PersonSchema extends Schema {
  up() {
    this.create('people', table => {
      table.increments();
      table.string('name_parents').notNullable();
      table.string('document', 40).unique();
      table.string('phone', 20);
      table.timestamps();
    });
  }

  down() {
    this.drop('people');
  }
}

module.exports = PersonSchema;
