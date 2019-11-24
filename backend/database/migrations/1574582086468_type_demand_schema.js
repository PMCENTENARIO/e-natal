/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TypeDemandSchema extends Schema {
  up() {
    this.create('type_demands', table => {
      table.increments();
      table
        .string('title')
        .notNullable()
        .unique();
      table.string('description');
      table.timestamps();
    });
  }

  down() {
    this.drop('type_demands');
  }
}

module.exports = TypeDemandSchema;
