import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";
import { Provider } from "react-redux";
import store from "../../redux/store";

test("Home rendering", () => {
    const history = createMemoryHistory();
    render(
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    );
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(
        screen.getByText(/A simple project created with React./i)
    ).toBeInTheDocument();

    // const leftClick = { button: 0 };
    // userEvent.click(screen.getByText(/about/i), leftClick);

    // check that the content changed to the new page
    // expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
});
