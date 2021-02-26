import { Container, CssBaseline } from '@material-ui/core';
import Navbar from './Navbar';
import Main from './Main';
import Theme from './Theme';

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
