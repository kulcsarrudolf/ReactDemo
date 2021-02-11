import Main from "../../components/Main";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import App from "../../components/App";

afterEach(cleanup);

const TestRouter = ({ path }) => {
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

test("Home page", () => {
    const { getByText } = render(<TestRouter path='/' />);

    getByText(/A simple project created with React./i);
});

test("User page", () => {
    const { getAllByText } = render(<TestRouter path='/user' />);

    getAllByText(/The current user is:/i);
    getAllByText(/Kulcsar Rudolf/i);
});
