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
import { Card } from "./Card";
import { cardTitles } from "./Card/card.data";

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

  // Cards da Simulação

  const cardList = cards ? Object.values(cards) : [];

  const getCard1 = cardList.filter(
    ({ tipoIndexacao, tipoRendimento }) =>
      tipoRendimento === "bruto" && tipoIndexacao === "pre"
  );

  const getCard2 = cardList.filter(
    ({ tipoIndexacao, tipoRendimento }) =>
      tipoRendimento === "bruto" && tipoIndexacao === "pos"
  );

  const getCard3 = cardList.filter(
    ({ tipoIndexacao, tipoRendimento }) =>
      tipoRendimento === "bruto" && tipoIndexacao === "ipca"
  );

  const getCard4 = cardList.filter(
    ({ tipoIndexacao, tipoRendimento }) =>
      tipoRendimento === "liquido" && tipoIndexacao === "pre"
  );

  const getCard5 = cardList.filter(
    ({ tipoIndexacao, tipoRendimento }) =>
      tipoRendimento === "liquido" && tipoIndexacao === "pos"
  );

  const getCard6 = cardList.filter(
    ({ tipoIndexacao, tipoRendimento }) =>
      tipoRendimento === "liquido" && tipoIndexacao === "ipca"
  );

  const simulate = () => {
    getCards();
  };

  const show1 = incomeButtonLeft && indexingButtonLeft;
  const show2 = incomeButtonLeft && indexingButtonCenter;
  const show3 = incomeButtonLeft && indexingButtonRight;
  const show4 = incomeButtonRight && indexingButtonLeft;
  const show5 = incomeButtonRight && indexingButtonCenter;
  const show6 = incomeButtonRight && indexingButtonRight;

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
    background: incomeButtonLeft ? "#EA7238" : "#FFFFFF",
    color: incomeButtonLeft ? "#FFFF" : "#333",
  };
  const styledIncomeRight = {
    background: incomeButtonRight ? "#EA7238" : "#FFFFFF",
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
    background: indexingButtonLeft ? "#EA7238" : "#FFFFFF",
    color: indexingButtonLeft ? "#FFFF" : "#333",
  };
  const styledButtonRight = {
    background: indexingButtonRight ? "#EA7238" : "#FFFFFF",
    color: indexingButtonRight ? "#FFFF" : "#333",
  };
  const styledButtonCenter = {
    background: indexingButtonCenter ? "#EA7238" : "#FFFFFF",
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
                  FIXADO
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
              onClick={simulate}
            />
          </Grid>
        </SimulateContainer>

        <ResultContainer>
          <Result>
            <h1 style={{ marginTop: -40, fontSize: 16 }}>
              Resultado da Simulação
            </h1>
            <GridCard>
              {show1 &&
                getCard1.map(({ valorFinalBruto }) => (
                  <Card title="Valor Final Bruto" value={valorFinalBruto} />
                ))}
              {show2 &&
                getCard2.map(({ valorFinalBruto }) => (
                  <Card title="Valor Final Bruto" value={valorFinalBruto} />
                ))}
              {show3 &&
                getCard3.map(({ valorFinalBruto }) => (
                  <Card title="Valor Final Bruto" value={valorFinalBruto} />
                ))}

              {show1 &&
                getCard1.map(({ aliquotaIR }) => (
                  <Card title="Alíquota do IR" value={aliquotaIR} />
                ))}
              {show2 &&
                getCard2.map(({ aliquotaIR }) => (
                  <Card title="Alíquota do IR" value={aliquotaIR} />
                ))}
              {show3 &&
                getCard3.map(({ aliquotaIR }) => (
                  <Card title="Alíquota do IR" value={aliquotaIR} />
                ))}

              {show1 &&
                getCard1.map(({ valorPagoIR }) => (
                  <Card title="Valor Pago em IR" value={valorPagoIR} />
                ))}
              {show2 &&
                getCard2.map(({ valorPagoIR }) => (
                  <Card title="Valor Pago em IR" value={valorPagoIR} />
                ))}
              {show3 &&
                getCard3.map(({ valorPagoIR }) => (
                  <Card title="Valor Pago em IR" value={valorPagoIR} />
                ))}

              {show1 &&
                getCard1.map(({ valorTotalInvestido }) => (
                  <Card
                    title="Valor Final Líquido"
                    value={valorTotalInvestido}
                  />
                ))}
              {show2 &&
                getCard2.map(({ valorTotalInvestido }) => (
                  <Card
                    title="Valor Final Líquido"
                    value={valorTotalInvestido}
                  />
                ))}
              {show3 &&
                getCard3.map(({ valorTotalInvestido }) => (
                  <Card
                    title="Valor Final Líquido"
                    value={valorTotalInvestido}
                  />
                ))}

              {show1 &&
                getCard1.map(({ valorFinalLiquido }) => (
                  <Card
                    title="Valor Total Investido"
                    value={valorFinalLiquido}
                  />
                ))}
              {show2 &&
                getCard2.map(({ valorFinalLiquido }) => (
                  <Card
                    title="Valor Total Investido"
                    value={valorFinalLiquido}
                  />
                ))}
              {show3 &&
                getCard3.map(({ valorFinalLiquido }) => (
                  <Card
                    title="Valor Total Investido"
                    value={valorFinalLiquido}
                  />
                ))}

              {show1 &&
                getCard1.map(({ ganhoLiquido }) => (
                  <Card title="Ganho Líquido" value={ganhoLiquido} />
                ))}
              {show2 &&
                getCard2.map(({ ganhoLiquido }) => (
                  <Card title="Ganho Líquido" value={ganhoLiquido} />
                ))}
              {show3 &&
                getCard3.map(({ ganhoLiquido }) => (
                  <Card title="Ganho Líquido" value={ganhoLiquido} />
                ))}

              {show4 &&
                getCard4.map(({ valorFinalBruto }) => (
                  <Card title="Valor Final Bruto" value={valorFinalBruto} />
                ))}
              {show5 &&
                getCard5.map(({ valorFinalBruto }) => (
                  <Card title="Valor Final Bruto" value={valorFinalBruto} />
                ))}
              {show6 &&
                getCard6.map(({ valorFinalBruto }) => (
                  <Card title="Valor Final Bruto" value={valorFinalBruto} />
                ))}

              {show4 &&
                getCard4.map(({ aliquotaIR }) => (
                  <Card title="Alíquota do IR" value={aliquotaIR} />
                ))}
              {show5 &&
                getCard5.map(({ aliquotaIR }) => (
                  <Card title="Alíquota do IR" value={aliquotaIR} />
                ))}
              {show6 &&
                getCard6.map(({ aliquotaIR }) => (
                  <Card title="Alíquota do IR" value={aliquotaIR} />
                ))}

              {show4 &&
                getCard4.map(({ valorPagoIR }) => (
                  <Card title="Valor Pago em IR" value={valorPagoIR} />
                ))}
              {show5 &&
                getCard5.map(({ valorPagoIR }) => (
                  <Card title="Valor Pago em IR" value={valorPagoIR} />
                ))}
              {show6 &&
                getCard6.map(({ valorPagoIR }) => (
                  <Card title="Valor Pago em IR" value={valorPagoIR} />
                ))}

              {show4 &&
                getCard4.map(({ valorTotalInvestido }) => (
                  <Card
                    title="Valor Final Líquido"
                    value={valorTotalInvestido}
                  />
                ))}
              {show5 &&
                getCard5.map(({ valorTotalInvestido }) => (
                  <Card
                    title="Valor Final Líquido"
                    value={valorTotalInvestido}
                  />
                ))}
              {show6 &&
                getCard6.map(({ valorTotalInvestido }) => (
                  <Card
                    title="Valor Final Líquido"
                    value={valorTotalInvestido}
                  />
                ))}

              {show4 &&
                getCard4.map(({ valorFinalLiquido }) => (
                  <Card
                    title="Valor Total Investido"
                    value={valorFinalLiquido}
                  />
                ))}
              {show5 &&
                getCard5.map(({ valorFinalLiquido }) => (
                  <Card
                    title="Valor Total Investido"
                    value={valorFinalLiquido}
                  />
                ))}
              {show6 &&
                getCard6.map(({ valorFinalLiquido }) => (
                  <Card
                    title="Valor Total Investido"
                    value={valorFinalLiquido}
                  />
                ))}

              {show4 &&
                getCard4.map(({ ganhoLiquido }) => (
                  <Card title="Ganho Líquido" value={ganhoLiquido} />
                ))}
              {show5 &&
                getCard5.map(({ ganhoLiquido }) => (
                  <Card title="Ganho Líquido" value={ganhoLiquido} />
                ))}
              {show6 &&
                getCard6.map(({ ganhoLiquido }) => (
                  <Card title="Ganho Líquido" value={ganhoLiquido} />
                ))}
            </GridCard>

            <SubTitle>Pojeção de Valores</SubTitle>
          </Result>
        </ResultContainer>
      </Section>
    </Wrapper>
  );
};

export default Simulator;
