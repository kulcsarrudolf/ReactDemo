import Main from "../../components/Main";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

afterEach(cleanup);

const TestRouter = ({ path }) => {
  const history = createMemoryHistory();

  history.push(path);
  return (
    <Router history={history}>
      <Main />
    </Router>
  );
};

test("test", () => {
  const { getByText } = render(<TestRouter path="/" />);

  getByText(/Home/i);
});

test("test2", () => {
  const { getByText, getAllByText } = render(
    <TestRouter path="/random-image" />
  );

  //   getByText(/Random Image/i);
  getAllByText(/Random Image/i);
});
