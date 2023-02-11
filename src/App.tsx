import { AppContextProvider } from "./components/context/provider";
import Header from "./components/Header";
import Simulator from "./components/Simulator";
import { Container } from "./style";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Container>
        <Simulator />
      </Container>
    </AppContextProvider>
  );
}

export default App;
