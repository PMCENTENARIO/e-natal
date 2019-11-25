import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from '~/routes/Route';

import SignIn from '~/pages/auth/SignIn';
import Dashboard from '~/pages/Dashboard';
import Tickets from '~/pages/Tickets';
import NewTicket from '~/pages/NewTicket';
/* import Provider from '~/pages/Dashboard/Provider';
import SignUp from '~/pages/SignUp';
import Users from '~/pages/Users';
import People from '~/pages/People';
import NewPeople from '~/pages/NewPeople'; */

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/Tickets" component={Tickets} isPrivate />
      <Route path="/NewTicket" component={NewTicket} isPrivate />
      {/* <Route path="/providers" component={Provider} isPrivate />
      <Route path="/users" component={Users} isPrivate />
      <Route path="/signup" component={SignUp} isPrivate />
      <Route path="/people" component={People} isPrivate />
      <Route path="/newpeople" component={NewPeople} isPrivate />
      */}
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
