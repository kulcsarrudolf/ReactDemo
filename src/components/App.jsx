import { HashRouter } from "react-router-dom";

import Navbar from "./Navbar";
import Main from "./Main";

function App() {
    return (
        <>
            <HashRouter>
                <Navbar />
                <Main />
            </HashRouter>
        </>
    );
}
export default App;
