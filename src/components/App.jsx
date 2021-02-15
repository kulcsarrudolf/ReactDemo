import Navbar from "./Navbar";
import Main from "./Main";
import { Container, CssBaseline } from "@material-ui/core";

function App() {
    return (
        <>
            <CssBaseline />
            <Container>
                <Navbar />
                <Main />
            </Container>
        </>
    );
}
export default App;
