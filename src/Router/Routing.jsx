import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../components/Home";
import RandomNote from "../components/RandomNote";
import Notes from "../components/Notes";
import PageNotFound from "../Router/PageNotFound";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/random-note" component={RandomNote} />
      <ProtectedRoute exact path="/notes" enabled={true} component={Notes} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routing;
