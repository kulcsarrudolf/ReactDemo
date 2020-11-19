import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../components/Home";
import RandomImage from "../components/RandomImage";
import Gallery from "../components/Gallery";
import PageNotFound from "../Router/PageNotFound";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/random-image" component={RandomImage} />
      <ProtectedRoute
        exact
        path="/gallery"
        enabled={true}
        component={Gallery}
      />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routing;
