import Navbar from "./Navbar";
import Main from "./Main";
import { Container, CssBaseline } from "@material-ui/core";
import Theme from "./Theme";

function App() {
    return (
        <>
            <Theme>
                <CssBaseline />
                <Container>
                    <Navbar />
                    <Main />
                </Container>
            </Theme>
        </>
    );
}
export default App;
