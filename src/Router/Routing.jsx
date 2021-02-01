import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../components/Home";
import Notes from "../components/Notes/Notes";
import PageNotFound from "./PageNotFound";
import User from "../components/User/User";

const Routing = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/user' component={User} />
            <ProtectedRoute
                exact
                path='/notes'
                enabled={true}
                component={Notes}
            />
            <Route path='*' component={PageNotFound} />
        </Switch>
    );
};

export default Routing;
