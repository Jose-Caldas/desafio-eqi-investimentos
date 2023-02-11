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
import { useAppContext } from "../context/hook";

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

  // Chamada API buscar indicadores
  const {
    state,
    setIncomeButtonLeft,
    setIncomeButtonRight,
    setIndexingButtonLeft,
    setIndexingButtonRight,
    setIndexingButtonCenter,
  } = useAppContext();

  async function getIndicators() {
    const { url, options } = GET_INDICATORS();

    const { response, data } = await request(url, options);
    if (response) setIndicators(data);
  }

  async function getSimulators() {
    const { url, options } = GET_SIMULATORS();

    const { response, data } = await request(url, options);
    if (response) setSimulators(data);
  }

  // Cards da Simulação

  const simulate = () => {
    getSimulators();
  };

  useEffect(() => {
    getIndicators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Manipulção dosTipos de rendimentos
  const handleLeftIncome = () => {
    setIncomeButtonLeft(true);
    if (state.incomeButtonRight) setIncomeButtonRight(false);
  };
  const handleRightIncome = () => {
    setIncomeButtonRight(true);
    if (state.incomeButtonLeft) setIncomeButtonLeft(false);
  };

  const styledIncomeLeft = {
    background: state.incomeButtonLeft ? "#EA7238" : "#FFFFFF",
    color: state.incomeButtonLeft ? "#FFFF" : "#333",
  };
  const styledIncomeRight = {
    background: state.incomeButtonRight ? "#EA7238" : "#FFFFFF",
    color: state.incomeButtonRight ? "#FFFF" : "#333",
  };

  // Manipulção dosTipos de indexação

  const handleLeftIndexing = () => {
    setIndexingButtonLeft(!state.indexingButtonLeft);
    if (state.indexingButtonRight) setIndexingButtonRight(false);
    if (state.indexingButtonCenter) setIndexingButtonCenter(false);
  };

  const handleCenterIndexing = () => {
    setIndexingButtonCenter(!state.indexingButtonCenter);
    if (state.indexingButtonRight) setIndexingButtonRight(false);
    if (state.indexingButtonLeft) setIndexingButtonLeft(false);
  };

  const handleRightIndexing = () => {
    setIndexingButtonRight(!state.indexingButtonRight);
    if (state.indexingButtonLeft) setIndexingButtonLeft(false);
    if (state.indexingButtonCenter) setIndexingButtonCenter(false);
  };

  const styledButtonLeft = {
    background: state.indexingButtonLeft ? "#EA7238" : "#FFFFFF",
    color: state.indexingButtonLeft ? "#FFFF" : "#333",
  };
  const styledButtonRight = {
    background: state.indexingButtonRight ? "#EA7238" : "#FFFFFF",
    color: state.indexingButtonRight ? "#FFFF" : "#333",
  };
  const styledButtonCenter = {
    background: state.indexingButtonCenter ? "#EA7238" : "#FFFFFF",
    color: state.indexingButtonCenter ? "#FFFF" : "#333",
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSimulators();
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
                    {state.incomeButtonLeft && <CheckIcon fontSize="small" />}
                  </S.Icon>
                  Bruto
                </S.IncomeLeft>

                <S.IncomeRight
                  onClick={handleRightIncome}
                  style={{ ...styledIncomeRight }}
                >
                  {state.incomeButtonRight && <CheckIcon fontSize="small" />}
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
                  {state.indexingButtonLeft && <CheckIcon fontSize="small" />}
                  PRÉ
                </S.IndexingLeft>
                <S.IndexingCenter
                  onClick={handleCenterIndexing}
                  style={{ ...styledButtonCenter }}
                >
                  {state.indexingButtonCenter && <CheckIcon fontSize="small" />}
                  POS
                </S.IndexingCenter>
                <S.IndexingRight
                  onClick={handleRightIndexing}
                  style={{ ...styledButtonRight }}
                >
                  {state.indexingButtonRight && <CheckIcon fontSize="small" />}
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
              {state.incomeButtonLeft && state.indexingButtonLeft ? (
                <Filter
                  cards={simulators}
                  typeIndex="pre"
                  typeRend="bruto"
                  incomeButtonLeft={state.incomeButtonLeft}
                  incomeButtonRight={state.incomeButtonRight}
                  indexingButtonLeft={state.indexingButtonLeft}
                  indexingButtonCenter={state.indexingButtonCenter}
                  indexingButtonRight={state.indexingButtonRight}
                  show={state.incomeButtonLeft && state.indexingButtonLeft}
                  isLoading={loading}
                />
              ) : null}

              {state.incomeButtonLeft && state.indexingButtonCenter ? (
                <Filter
                  cards={simulators}
                  typeIndex="pos"
                  typeRend="bruto"
                  incomeButtonLeft={state.incomeButtonLeft}
                  incomeButtonRight={state.incomeButtonRight}
                  indexingButtonLeft={state.indexingButtonLeft}
                  indexingButtonCenter={state.indexingButtonCenter}
                  indexingButtonRight={state.indexingButtonRight}
                  show={state.incomeButtonLeft && state.indexingButtonCenter}
                  isLoading={loading}
                />
              ) : null}

              {state.incomeButtonLeft && state.indexingButtonRight ? (
                <Filter
                  cards={simulators}
                  typeIndex="ipca"
                  typeRend="bruto"
                  incomeButtonLeft={state.incomeButtonLeft}
                  incomeButtonRight={state.incomeButtonRight}
                  indexingButtonLeft={state.indexingButtonLeft}
                  indexingButtonCenter={state.indexingButtonCenter}
                  indexingButtonRight={state.indexingButtonRight}
                  show={state.incomeButtonLeft && state.indexingButtonRight}
                  isLoading={loading}
                />
              ) : null}

              {state.incomeButtonRight && state.indexingButtonLeft ? (
                <Filter
                  cards={simulators}
                  typeIndex="pre"
                  typeRend="liquido"
                  incomeButtonLeft={state.incomeButtonLeft}
                  incomeButtonRight={state.incomeButtonRight}
                  indexingButtonLeft={state.indexingButtonLeft}
                  indexingButtonCenter={state.indexingButtonCenter}
                  indexingButtonRight={state.indexingButtonRight}
                  show={state.incomeButtonRight && state.indexingButtonLeft}
                  isLoading={loading}
                />
              ) : null}

              {state.incomeButtonRight && state.indexingButtonCenter ? (
                <Filter
                  cards={simulators}
                  typeIndex="pos"
                  typeRend="liquido"
                  incomeButtonLeft={state.incomeButtonLeft}
                  incomeButtonRight={state.incomeButtonRight}
                  indexingButtonLeft={state.indexingButtonLeft}
                  indexingButtonCenter={state.indexingButtonCenter}
                  indexingButtonRight={state.indexingButtonRight}
                  show={state.incomeButtonRight && state.indexingButtonCenter}
                  isLoading={loading}
                />
              ) : null}
              {state.incomeButtonRight && state.indexingButtonRight ? (
                <Filter
                  cards={simulators}
                  typeIndex="ipca"
                  typeRend="liquido"
                  incomeButtonLeft={state.incomeButtonLeft}
                  incomeButtonRight={state.incomeButtonRight}
                  indexingButtonLeft={state.indexingButtonLeft}
                  indexingButtonCenter={state.indexingButtonCenter}
                  indexingButtonRight={state.indexingButtonRight}
                  show={state.incomeButtonRight && state.indexingButtonRight}
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
