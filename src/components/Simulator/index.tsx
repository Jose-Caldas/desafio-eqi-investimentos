import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { GET_INDICATORS, GET_SIMULATORS } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Button from "../Button";
import Grid from "./Grid";

import Income from "./Income";
import Indexing from "./Indexing";
import {
  Wrapper,
  Title,
  Section,
  Label,
  Input,
  Result,
  SubTitle,
  Box,
  Span,
  ApiBox,
} from "./styles";

const Simulator = () => {
  const [cards, setCards] = useState([]);
  const [indicators, setIndicators] = useState([]);
  const { loading, request } = useFetch();
  const [isLoading, setIsLoading] = useState(false);

  async function getIndicators() {
    const { url, options } = GET_INDICATORS();

    const { response, data } = await request(url, options);
    if (response) setIndicators(data);
  }
  async function getCards() {
    const { url, options } = GET_SIMULATORS();

    const { response, data } = await request(url, options);
    if (response) setCards(data);
  }

  useEffect(() => {
    getIndicators();
  }, []);

  return (
    <Wrapper>
      <Title>Simulador de investimentos</Title>
      <SubTitle>Simulador</SubTitle>
      <Section>
        <Grid>
          <Income />
          <Indexing />
          <Box>
            <Label>Aporte Mensal</Label>
            <Input />
          </Box>
          <Box>
            <Label>Aporte Anual</Label>
            <Input />
          </Box>
          <Box>
            <Label>Prazo (em meses)</Label>
            <Input />
          </Box>
          <Box>
            <Label>Rentabilidade</Label>
            <Input />
          </Box>
          {indicators.map(({ nome, valor }) => (
            <ApiBox>
              <p style={{ margin: "2px", fontSize: 12 }}>
                <Span>{`${nome}`} </Span>
                (ao ano)
              </p>
              <p>{valor}%</p>
            </ApiBox>
          ))}
          <Button
            title="Limpar campos"
            isLoading={isLoading}
            types="primary"
            disabled={isLoading}
          />
          <Button
            title="Simular"
            isLoading={isLoading}
            types="secondary"
            disabled={isLoading}
          />
        </Grid>

        <Result>
          <h1 style={{ marginTop: -40, fontSize: 16 }}>
            Resultado da Simulação
          </h1>
          <Grid>
            {cards.map(({ valorFinalBruto }) =>
              loading ? (
                <CircularProgress size={15} color="inherit" />
              ) : (
                <p>{valorFinalBruto}</p>
              )
            )}
          </Grid>

          <button onClick={getCards}>Simular</button>
          <SubTitle>Pojeção de Valores</SubTitle>
        </Result>
      </Section>
    </Wrapper>
  );
};

export default Simulator;
