import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { GET_INDICATORS, GET_SIMULATORS } from "../../api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Button";
import Input from "../Form/Input/Input";

import Income from "./Income";
import Indexing from "./Indexing";
import {
  Wrapper,
  Title,
  Section,
  Grid,
  Form,
  Result,
  SubTitle,
  Box,
  Span,
  Card,
  Text,
  GridCard,
  SimulateContainer,
  ResultContainer,
} from "./styles";

const Simulator = () => {
  const [cards, setCards] = useState([]);
  const [indicators, setIndicators] = useState([]);
  const { loading, request } = useFetch();
  const [isLoading, setIsLoading] = useState(false);
  const mensal = useForm();
  const anual = useForm();
  const prazo = useForm();
  const rent = useForm();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Title>Simulador de investimentos</Title>
      <SubTitle>Simulador</SubTitle>
      <Section>
        <SimulateContainer>
          <Grid>
            <Income />
            <Indexing />
          </Grid>
          <Form>
            <Input label="Aporte Mensal" name="mensal" {...mensal} />
            <Input
              label="Aporte Anual"
              name="anual"
              error="Aporte deve ser um número"
              {...anual}
            />
            <Input label="Prazo (em meses)" name="prazo" {...prazo} />
            <Input label="Rentabilidade" name="rentabilidade" {...rent} />
          </Form>
          <Grid>
            {indicators.map(({ nome, valor }) => (
              <Box>
                <p style={{ margin: "2px", fontSize: 12 }}>
                  <Span>{`${nome}`} </Span>
                  (ao ano)
                </p>
                <p>{valor}%</p>
              </Box>
            ))}
          </Grid>
          <Grid>
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
        </SimulateContainer>

        <ResultContainer>
          <Result>
            <h1 style={{ marginTop: -40, fontSize: 16 }}>
              Resultado da Simulação
            </h1>
            <GridCard>
              {cards.map(({ valorFinalBruto }) =>
                loading ? (
                  <CircularProgress size={15} color="inherit" />
                ) : (
                  <Card>
                    <Text>Valor Final Bruto</Text>
                    <p>{valorFinalBruto}</p>
                  </Card>
                )
              )}
            </GridCard>

            <button onClick={getCards}>Simular</button>
            <SubTitle>Pojeção de Valores</SubTitle>
          </Result>
        </ResultContainer>
      </Section>
    </Wrapper>
  );
};

export default Simulator;
