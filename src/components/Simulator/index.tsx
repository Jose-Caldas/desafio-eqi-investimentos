import { useState } from "react";
import { GET_SIMULATORS } from "../../api";

import Income from "./Income";
import Indexing from "./Indexing";
import {
  Wrapper,
  Title,
  Section,
  Options,
  Result,
  SubTitle,
  Grid,
} from "./styles";

const Simulator = () => {
  const [cards, setCards] = useState([]);

  async function getIndicators() {
    const { url, options } = GET_SIMULATORS();

    const response = await fetch(url, options);
    const data = await response.json();

    setCards(data);
  }

  return (
    <Wrapper>
      <Title>Simulador de investimentos</Title>
      <SubTitle>Simulador</SubTitle>
      <Section>
        <Options>
          <Income />
          <Indexing />
        </Options>

        <Result>
          <Grid>
            {cards.map(({ valorFinalBruto }) => (
              <p>{valorFinalBruto}</p>
            ))}
          </Grid>

          <button onClick={getIndicators}>Simular</button>
          <SubTitle>Pojeção de Valores</SubTitle>
        </Result>
      </Section>
    </Wrapper>
  );
};

export default Simulator;
