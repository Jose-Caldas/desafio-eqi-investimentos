import { FormEvent, useEffect, useState } from "react";
import { GET_INDICATORS, GET_SIMULATORS } from "../../api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Button";
import Input from "../Form/Input/Input";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CheckIcon from "@material-ui/icons/Check";

import * as S from "./styles";

import Filter from "./Filter";

const Simulator = () => {
  // API
  const [simulators, setSimulators] = useState([]);
  const [indicators, setIndicators] = useState([]);
  const { loading, request } = useFetch();

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
    if (response) setSimulators(data);
  }

  // Cards da Simulação

  const simulate = () => {
    getCards();
  };

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getCards();
  };

  useEffect(() => {
    setIndexingButtonCenter(true);
  }, []);

  return (
    <S.Wrapper>
      <S.Title>Simulador de investimentos</S.Title>
      <S.SubTitle>Simulador</S.SubTitle>
      <S.Section>
        <S.SimulateContainer>
          <S.Grid>
            <S.IncomeWrapper>
              <S.Header>
                <S.IncomeTitle>Rendimento</S.IncomeTitle>
                <InfoOutlinedIcon fontSize="small" />
              </S.Header>
              <S.IncomeButtons>
                <S.IncomeLeft
                  onClick={handleLeftIncome}
                  style={{ ...styledIncomeLeft }}
                >
                  <S.Icon>
                    {incomeButtonLeft && <CheckIcon fontSize="small" />}
                  </S.Icon>
                  Bruto
                </S.IncomeLeft>

                <S.IncomeRight
                  onClick={handleRightIncome}
                  style={{ ...styledIncomeRight }}
                >
                  {incomeButtonRight && <CheckIcon fontSize="small" />}
                  Líquido
                </S.IncomeRight>
              </S.IncomeButtons>
            </S.IncomeWrapper>
            <S.IndexingWrapper>
              <S.Header>
                <S.IndexingTitle>Tipos de indexação</S.IndexingTitle>
                <InfoOutlinedIcon fontSize="small" />
              </S.Header>
              <S.IndexingButtons>
                <S.IndexingLeft
                  onClick={handleLeftIndexing}
                  style={{ ...styledButtonLeft }}
                >
                  {indexingButtonLeft && <CheckIcon fontSize="small" />}
                  PRÉ
                </S.IndexingLeft>
                <S.IndexingCenter
                  onClick={handleCenterIndexing}
                  style={{ ...styledButtonCenter }}
                >
                  {indexingButtonCenter && <CheckIcon fontSize="small" />}
                  POS
                </S.IndexingCenter>
                <S.IndexingRight
                  onClick={handleRightIndexing}
                  style={{ ...styledButtonRight }}
                >
                  {indexingButtonRight && <CheckIcon fontSize="small" />}
                  FIXADO
                </S.IndexingRight>
              </S.IndexingButtons>
            </S.IndexingWrapper>
          </S.Grid>
          <S.Form onSubmit={(e) => handleSubmit(e)}>
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

            {indicators.map(({ nome, valor }) => (
              <S.Box key={nome}>
                <p>
                  <S.Span>{`${nome}`} </S.Span>
                  (ao ano)
                </p>
                <h2>{valor}%</h2>
              </S.Box>
            ))}

            <Button title="Limpar campos" types="primary" />
            <Button
              title="Simular"
              // isLoading={loading}
              types="secondary"
              // disabled={loading}
              onClick={simulate}
              type="submit"
            />
          </S.Form>
        </S.SimulateContainer>

        <S.ResultContainer>
          <S.Result>
            <h1 style={{ marginTop: -40, fontSize: 16 }}>
              Resultado da Simulação
            </h1>

            <S.GridCard>
              {incomeButtonLeft && indexingButtonLeft ? (
                <Filter
                  cards={simulators}
                  typeIndex="pre"
                  typeRend="bruto"
                  incomeButtonLeft={incomeButtonLeft}
                  incomeButtonRight={incomeButtonRight}
                  indexingButtonLeft={indexingButtonLeft}
                  indexingButtonCenter={indexingButtonCenter}
                  indexingButtonRight={indexingButtonRight}
                  show={incomeButtonLeft && indexingButtonLeft}
                  isLoading={loading}
                />
              ) : null}

              {incomeButtonLeft && indexingButtonCenter ? (
                <Filter
                  cards={simulators}
                  typeIndex="pos"
                  typeRend="bruto"
                  incomeButtonLeft={incomeButtonLeft}
                  incomeButtonRight={incomeButtonRight}
                  indexingButtonLeft={indexingButtonLeft}
                  indexingButtonCenter={indexingButtonCenter}
                  indexingButtonRight={indexingButtonRight}
                  show={incomeButtonLeft && indexingButtonCenter}
                  isLoading={loading}
                />
              ) : null}

              {incomeButtonLeft && indexingButtonRight ? (
                <Filter
                  cards={simulators}
                  typeIndex="ipca"
                  typeRend="bruto"
                  incomeButtonLeft={incomeButtonLeft}
                  incomeButtonRight={incomeButtonRight}
                  indexingButtonLeft={indexingButtonLeft}
                  indexingButtonCenter={indexingButtonCenter}
                  indexingButtonRight={indexingButtonRight}
                  show={incomeButtonLeft && indexingButtonRight}
                  isLoading={loading}
                />
              ) : null}

              {incomeButtonRight && indexingButtonLeft ? (
                <Filter
                  cards={simulators}
                  typeIndex="pre"
                  typeRend="liquido"
                  incomeButtonLeft={incomeButtonLeft}
                  incomeButtonRight={incomeButtonRight}
                  indexingButtonLeft={indexingButtonLeft}
                  indexingButtonCenter={indexingButtonCenter}
                  indexingButtonRight={indexingButtonRight}
                  show={incomeButtonRight && indexingButtonLeft}
                  isLoading={loading}
                />
              ) : null}

              {incomeButtonRight && indexingButtonCenter ? (
                <Filter
                  cards={simulators}
                  typeIndex="pos"
                  typeRend="liquido"
                  incomeButtonLeft={incomeButtonLeft}
                  incomeButtonRight={incomeButtonRight}
                  indexingButtonLeft={indexingButtonLeft}
                  indexingButtonCenter={indexingButtonCenter}
                  indexingButtonRight={indexingButtonRight}
                  show={incomeButtonRight && indexingButtonCenter}
                  isLoading={loading}
                />
              ) : null}
              {incomeButtonRight && indexingButtonRight ? (
                <Filter
                  cards={simulators}
                  typeIndex="ipca"
                  typeRend="liquido"
                  incomeButtonLeft={incomeButtonLeft}
                  incomeButtonRight={incomeButtonRight}
                  indexingButtonLeft={indexingButtonLeft}
                  indexingButtonCenter={indexingButtonCenter}
                  indexingButtonRight={indexingButtonRight}
                  show={incomeButtonRight && indexingButtonRight}
                  isLoading={loading}
                />
              ) : null}
            </S.GridCard>

            <S.SubTitle>Pojeção de Valores</S.SubTitle>
          </S.Result>
        </S.ResultContainer>
      </S.Section>
    </S.Wrapper>
  );
};

export default Simulator;
