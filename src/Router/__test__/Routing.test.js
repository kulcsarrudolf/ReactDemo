import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { NotesAppContext } from "../../components/__test__/utils/NotesAppTestUtils";

afterEach(cleanup);

test("Home page", () => {
    const { getByText } = render(<NotesAppContext path='/' />);

    getByText(/A simple project created with React./i);
});

test("User page", () => {
    const { getAllByText } = render(<NotesAppContext path='/user' />);

    getAllByText(/The current user is:/i);
    getAllByText(/Kulcsar Rudolf/i);
});
