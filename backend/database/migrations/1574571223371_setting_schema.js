/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class SettingSchema extends Schema {
  up() {
    this.create('settings', table => {
      table.increments();
      table.string('organization').notNullable();
      table.string('contact').notNullable();
      table.string('locate_delivery').notNullable();
      table.integer('age_max').notNullable();
      table.date('date_initial');
      table.date('date_finally');
      table.timestamps();
    });
  }

  down() {
    this.drop('settings');
  }
}

module.exports = SettingSchema;
