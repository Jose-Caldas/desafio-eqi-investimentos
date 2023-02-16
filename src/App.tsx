import Header from "./components/Header";
import Simulator from "./components/Simulator";
import { Container } from "./style";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Simulator />
      </Container>
    </>
  );
}

export default App;
