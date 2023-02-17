import { useCallback, useEffect, useState } from "react";
import { GET_INDICATORS, GET_SIMULATORS } from "../../api";
import useFetch from "../../Hooks/useFetch";
import * as S from "./styles";
import CardsFilter from "./CardsFilter";
import { useAppContext } from "../context/hook";
import Input from "../Input";
import Button from "../Button";
import { ISimulators } from "../../interfaces/ISimulators";
import { IIndicators } from "../../interfaces/IIndicators";
import SelectMonth from "./SelectMonth";
import IncomePercentage from "./IncomePercentage";
import { currencyMask } from "../../utils/currencyMask";
import GraphsFilter from "./GraphsFilter";
import IncomeOptions from "./Options/IncomeOptions";
import IndexingOptions from "./Options/IndexingOptions";

interface IFormState {
  monthly: string;
  annual: string;
}

const Simulator = () => {
  const [simulators, setSimulators] = useState<ISimulators[]>([]);
  const [indicators, setIndicators] = useState<IIndicators[]>([]);
  const { loading, request } = useFetch();
  const [inputError, setInputError] = useState(false);

  const [formState, setFormState] = useState<IFormState>({
    monthly: "",
    annual: "",
  });

  const { state } = useAppContext();

  useEffect(() => {
    async function getIndicators() {
      const { url, options } = GET_INDICATORS();

      const { response, data } = await request(url, options);
      if (response) setIndicators(data);
    }
    getIndicators();
  }, [request]);

  const getSimulators = useCallback(async () => {
    const { url, options } = GET_SIMULATORS();

    const { response, data } = await request(url, options);
    if (response) setSimulators(data);
  }, [request]);

  const clearForm = () => {
    setFormState({
      monthly: "",
      annual: "",
    });
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (formState.monthly.length === 0 || formState.annual.length === 0) {
        setInputError(true);
        return;
      }

      setInputError(false);
      getSimulators();
    },

    [formState, getSimulators]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: [e.target.value] });
  };

  const showSimulate =
    formState.monthly.length !== 0 && formState.annual.length !== 0;

  console.log(formState.monthly.length);

  return (
    <S.Wrapper>
      <S.Title>Simulador de investimentos</S.Title>
      <S.SubTitle>Simulador</S.SubTitle>

      <S.Section>
        <S.Container>
          <S.Options>
            <IncomeOptions />
            <IndexingOptions />
          </S.Options>

          <S.Form onSubmit={(e) => handleSubmit(e)}>
            <Input
              title="Aporte Mensal"
              type="text"
              value={formState.monthly}
              name="monthly"
              onChange={(e) => handleChange(currencyMask(e))}
              error={inputError}
            />
            <Input
              title="Aporte Anual"
              type="text"
              value={formState.annual}
              name="annual"
              onChange={(e) => handleChange(currencyMask(e))}
              error={inputError}
            />

            <SelectMonth />
            <IncomePercentage />

            {indicators.map(({ nome, valor }) => (
              <S.Box key={nome}>
                <p>
                  <S.Span>{`${nome}`} </S.Span>
                  (ao ano)
                </p>
                <h2>{valor}%</h2>
              </S.Box>
            ))}

            <Button title="Limpar campos" types="primary" onClick={clearForm} />
            <Button
              title="Simular"
              isLoading={loading}
              types="secondary"
              disabled={loading}
              type="submit"
            />
          </S.Form>
        </S.Container>

        <S.ResultContainer>
          <S.Result>
            <h1 style={{ marginTop: -40, fontSize: 16 }}>
              Resultado da Simulação
            </h1>

            <S.GridCard>
              {state.incomeButtonLeft &&
              state.indexingButtonLeft &&
              showSimulate ? (
                <CardsFilter
                  cards={simulators}
                  typeIndexing="pre"
                  typeIncome="bruto"
                  isLoading={loading}
                />
              ) : null}

              {state.incomeButtonLeft &&
              state.indexingButtonCenter &&
              showSimulate ? (
                <CardsFilter
                  cards={simulators}
                  typeIndexing="pos"
                  typeIncome="bruto"
                  isLoading={loading}
                />
              ) : null}

              {state.incomeButtonLeft &&
              state.indexingButtonRight &&
              showSimulate ? (
                <CardsFilter
                  cards={simulators}
                  typeIndexing="ipca"
                  typeIncome="bruto"
                  isLoading={loading}
                />
              ) : null}

              {state.incomeButtonRight &&
              state.indexingButtonLeft &&
              showSimulate ? (
                <CardsFilter
                  cards={simulators}
                  typeIndexing="pre"
                  typeIncome="liquido"
                  isLoading={loading}
                />
              ) : null}

              {state.incomeButtonRight &&
              state.indexingButtonCenter &&
              showSimulate ? (
                <CardsFilter
                  cards={simulators}
                  typeIndexing="pos"
                  typeIncome="liquido"
                  isLoading={loading}
                />
              ) : null}

              {state.incomeButtonRight &&
              state.indexingButtonRight &&
              showSimulate ? (
                <CardsFilter
                  cards={simulators}
                  typeIndexing="ipca"
                  typeIncome="liquido"
                  isLoading={loading}
                />
              ) : null}
            </S.GridCard>

            <>
              <S.SubTitle>Pojeção de Valores</S.SubTitle>
              {state.incomeButtonLeft &&
              state.indexingButtonLeft &&
              showSimulate ? (
                <GraphsFilter typeIncome="bruto" typeIndexing="pre" />
              ) : null}

              {state.incomeButtonLeft &&
              state.indexingButtonCenter &&
              showSimulate ? (
                <GraphsFilter typeIncome="bruto" typeIndexing="pos" />
              ) : null}

              {state.incomeButtonLeft &&
              state.indexingButtonRight &&
              showSimulate ? (
                <GraphsFilter typeIncome="bruto" typeIndexing="ipca" />
              ) : null}

              {state.incomeButtonRight &&
              state.indexingButtonLeft &&
              showSimulate ? (
                <GraphsFilter typeIncome="liquido" typeIndexing="pre" />
              ) : null}

              {state.incomeButtonRight &&
              state.indexingButtonCenter &&
              showSimulate ? (
                <GraphsFilter typeIncome="liquido" typeIndexing="pos" />
              ) : null}

              {state.incomeButtonRight &&
              state.indexingButtonRight &&
              showSimulate ? (
                <GraphsFilter typeIncome="liquido" typeIndexing="ipca" />
              ) : null}
            </>
          </S.Result>
        </S.ResultContainer>
      </S.Section>
    </S.Wrapper>
  );
};

export default Simulator;
