import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import { GET_SIMULATORS } from "../../api";
import useFetch from "../../Hooks/useFetch";

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
  const { loading, request } = useFetch();

  async function getIndicators() {
    const { url, options } = GET_SIMULATORS();

    const { response, data } = await request(url, options);
    if (response) setCards(data);
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
            {cards.map(({ valorFinalBruto }) =>
              loading ? (
                <CircularProgress size={15} color="inherit" />
              ) : (
                <p>{valorFinalBruto}</p>
              )
            )}
          </Grid>

          <button onClick={getIndicators}>Simular</button>
          <SubTitle>Pojeção de Valores</SubTitle>
        </Result>
      </Section>
    </Wrapper>
  );
};

export default Simulator;
