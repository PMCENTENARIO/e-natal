const Setting = use('App/Models/Setting');

class SettingController {
  async index() {
    const settings = Setting.first();
    return settings;
  }

  async store({ request }) {
    const data = request.only([
      'organization',
      'contact',
      'locate_delivery',
      'age_max',
      'date_initial',
      'date_finally',
    ]);

    let settings = await Setting.first();

    if (settings < 1 || settings === 'null') {
      settings = await Setting.create(data);
      return settings;
    }
    settings.merge(data);

    await settings.save();
    return settings;
  }
}

module.exports = SettingController;
