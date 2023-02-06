import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { GET_INDICATORS, GET_SIMULATORS } from "../../api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Button";
import Input from "../Form/Input/Input";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CheckIcon from "@material-ui/icons/Check";

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
  IncomeWrapper,
  Header,
  IncomeButtons,
  IncomeLeft,
  Icon,
  IncomeRight,
  IncomeTitle,
  IndexingTitle,
  IndexingButtons,
  IndexingLeft,
  IndexingCenter,
  IndexingRight,
  IndexingWrapper,
} from "./styles";

const Simulator = () => {
  // API
  const [cards, setCards] = useState([]);
  const [indicators, setIndicators] = useState([]);
  const { loading, request } = useFetch();
  const [isLoading, setIsLoading] = useState(false);

  // FORM
  const mensal = useForm();
  const anual = useForm();
  const prazo = useForm();
  const rentabilidade = useForm();

  // Estados Rendimento / Tipos indexação
  const [incomeButtonLeft, setIncomeButtonLeft] = useState(false);
  const [incomeButtonRight, setIncomeButtonRight] = useState(false);
  const [indexingButtonLeft, setIndexingButtonLeft] = useState(false);
  const [indexingButtonRight, setIndexingButtonRight] = useState(false);
  const [indexingButtonCenter, setIndexingButtonCenter] = useState(false);

  // Chamada API buscar indicadores
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

  // Manipulção dosTipos de rendimentos
  const handleLeftIncome = () => {
    setIncomeButtonLeft(!incomeButtonLeft);
    if (incomeButtonRight) setIncomeButtonRight(false);
  };
  const handleRightIncome = () => {
    setIncomeButtonRight(!incomeButtonRight);
    if (incomeButtonLeft) setIncomeButtonLeft(false);
  };

  const styledIncomeLeft = {
    background: incomeButtonLeft ? "#f27e22" : "#FFFFFF",
    color: incomeButtonLeft ? "#FFFF" : "#333",
  };
  const styledIncomeRight = {
    background: incomeButtonRight ? "#f27e22" : "#FFFFFF",
    color: incomeButtonRight ? "#FFFF" : "#333",
  };

  useEffect(() => {
    setIncomeButtonLeft(true);
  }, []);

  // Manipulção dosTipos de indexação

  const handleLeftIndexing = () => {
    setIndexingButtonLeft(!indexingButtonLeft);
    if (indexingButtonRight) setIndexingButtonRight(false);
    if (indexingButtonCenter) setIndexingButtonCenter(false);
  };

  const handleCenterIndexing = () => {
    setIndexingButtonCenter(!indexingButtonCenter);
    if (indexingButtonRight) setIndexingButtonRight(false);
    if (indexingButtonLeft) setIndexingButtonLeft(false);
  };

  const handleRightIndexing = () => {
    setIndexingButtonRight(!indexingButtonRight);
    if (indexingButtonLeft) setIndexingButtonLeft(false);
    if (indexingButtonCenter) setIndexingButtonCenter(false);
  };

  const styledButtonLeft = {
    background: indexingButtonLeft ? "#f27e22" : "#FFFFFF",
    color: indexingButtonLeft ? "#FFFF" : "#333",
  };
  const styledButtonRight = {
    background: indexingButtonRight ? "#f27e22" : "#FFFFFF",
    color: indexingButtonRight ? "#FFFF" : "#333",
  };
  const styledButtonCenter = {
    background: indexingButtonCenter ? "#f27e22" : "#FFFFFF",
    color: indexingButtonCenter ? "#FFFF" : "#333",
  };

  useEffect(() => {
    setIndexingButtonCenter(true);
  }, []);

  return (
    <Wrapper>
      <Title>Simulador de investimentos</Title>
      <SubTitle>Simulador</SubTitle>
      <Section>
        <SimulateContainer>
          <Grid>
            <IncomeWrapper>
              <Header>
                <IncomeTitle>Rendimento</IncomeTitle>
                <InfoOutlinedIcon fontSize="small" />
              </Header>
              <IncomeButtons>
                <IncomeLeft
                  onClick={handleLeftIncome}
                  style={{ ...styledIncomeLeft }}
                >
                  <Icon>
                    {incomeButtonLeft && <CheckIcon fontSize="small" />}
                  </Icon>
                  Bruto
                </IncomeLeft>

                <IncomeRight
                  onClick={handleRightIncome}
                  style={{ ...styledIncomeRight }}
                >
                  {incomeButtonRight && <CheckIcon fontSize="small" />}
                  Líquido
                </IncomeRight>
              </IncomeButtons>
            </IncomeWrapper>
            <IndexingWrapper>
              <Header>
                <IndexingTitle>Tipos de indexação</IndexingTitle>
                <InfoOutlinedIcon fontSize="small" />
              </Header>
              <IndexingButtons>
                <IndexingLeft
                  onClick={handleLeftIndexing}
                  style={{ ...styledButtonLeft }}
                >
                  {indexingButtonLeft && <CheckIcon fontSize="small" />}
                  PRÉ
                </IndexingLeft>
                <IndexingCenter
                  onClick={handleCenterIndexing}
                  style={{ ...styledButtonCenter }}
                >
                  {indexingButtonCenter && <CheckIcon fontSize="small" />}
                  POS
                </IndexingCenter>
                <IndexingRight
                  onClick={handleRightIndexing}
                  style={{ ...styledButtonRight }}
                >
                  {indexingButtonRight && <CheckIcon fontSize="small" />}
                  Fixado
                </IndexingRight>
              </IndexingButtons>
            </IndexingWrapper>
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
            <Input
              label="Rentabilidade"
              name="rentabilidade"
              {...rentabilidade}
            />
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
