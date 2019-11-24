/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with schools
 */
const School = use('App/Models/School');

class SchoolController {
  async index() {
    const schools = await School.all();

    return schools;
  }

  async store({ request }) {
    const data = request.only(['name', 'description']);

    const schools = await School.create(data);

    return schools;
  }

  async update({ params, request }) {
    const school = await School.findOrFail(params.id);
    const data = request.only(['name', 'description']);

    school.merge(data);

    await school.save();

    return school;
  }

  async destroy({ params }) {
    const school = await School.findOrFail(params.id);

    await school.delete();
  }
}

module.exports = SchoolController;
