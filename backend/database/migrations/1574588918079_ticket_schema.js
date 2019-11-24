/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TicketSchema extends Schema {
  up() {
    this.create('tickets', table => {
      table.increments();
      table
        .integer('type_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('type_demands')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('childen', 240).notNullable();
      table.date('age').notNullable();
      table
        .integer('school_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('schools')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('person_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('people')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('address_id')
        .unsigned()
        .references('id')
        .inTable('addresses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('password')
        .notNullable()
        .unique();
      table.date('delivery').notNullable();
      table.string('observation', 400);
      table.string('qrcode');
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('tickets');
  }
}

module.exports = TicketSchema;
