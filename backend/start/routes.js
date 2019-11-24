/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');

Route.post('/register', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');

Route.group(() => {
  Route.resource('users', 'UserController');
  Route.resource('settings', 'SettingController');
  Route.resource('schools', 'SchoolrController');
  Route.resource('addresses', 'AddressController');
  Route.resource('people', 'PersonController');
  Route.resource('type_demands', 'TypeDemandController');
  Route.resource('tickets', 'TicketController');
}).middleware('auth');
