import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

import Home from '../components/Home';
import Notes from '../components/notes/Notes';
import PageNotFound from './PageNotFound';
import User from '../components/user/User';
import Changelog from '../components/changelog';

const Routing = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <ProtectedRoute exact path="/notes" enabled component={Notes} />
    <Route exact path="/user" component={User} />
    <Route exact path="/changelog" component={Changelog} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default Routing;
