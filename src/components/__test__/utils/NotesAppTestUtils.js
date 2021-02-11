import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { Provider } from "react-redux";
import store from "../../../redux/store";

import App from "../../App";

export const NotesAppContext = ({ path }) => {
    const history = createMemoryHistory();

    history.push(path);
    return (
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    );
};
