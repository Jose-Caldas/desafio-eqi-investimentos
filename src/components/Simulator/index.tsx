import Income from "./Income";
import Indexing from "./Indexing";
import { Wrapper, Title, Section, Options, Result, SubTitle } from "./styles";

const Simulator = () => {
  return (
    <Wrapper>
      <Title>Simulador de investimentos</Title>
      <SubTitle>Simulador</SubTitle>
      <Section>
        <Options>
          <Income />
          <Indexing />
        </Options>
        <Result></Result>
      </Section>
    </Wrapper>
  );
};

export default Simulator;
