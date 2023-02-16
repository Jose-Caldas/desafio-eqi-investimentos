import React, { useState, useEffect } from "react";
import { GET_SIMULATORS } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import { ISimulators } from "../../../interfaces/ISimulators";
import { VictoryChart, VictoryBar } from "victory";
import * as S from "./styles";

type GraphsFilterProps = {
  typeIndexing: string;
  typeIncome: string;
};

const GraphsFilter = ({ typeIncome, typeIndexing }: GraphsFilterProps) => {
  const [graphs, setGraphs] = useState<ISimulators[]>([]);
  const { request } = useFetch();

  useEffect(() => {
    async function getGraphs() {
      const { url, options } = GET_SIMULATORS();
      const { response, data } = await request(url, options);
      if (response) setGraphs(data);
    }
    getGraphs();
  }, [request]);

  let cardList = graphs ? Object.values(graphs) : [];

  const getCard = cardList.filter(
    ({ tipoIndexacao, tipoRendimento }) =>
      tipoIndexacao === typeIndexing && tipoRendimento === typeIncome
  );

  return (
    <S.Container>
      <S.Content>
        {getCard.map(({ graficoValores }, index) => (
          <S.Graph>
            <VictoryChart>
              <VictoryBar
                key={index}
                data={[
                  {
                    x: "0",
                    y: graficoValores.comAporte[0],
                  },
                  {
                    x: "1",
                    y: graficoValores.comAporte[1],
                  },
                  {
                    x: "2",
                    y: graficoValores.comAporte[2],
                  },
                  {
                    x: "3",
                    y: graficoValores.comAporte[3],
                  },
                  {
                    x: "4",
                    y: graficoValores.comAporte[4],
                  },
                  {
                    x: "5",
                    y: graficoValores.comAporte[5],
                  },
                  {
                    x: "6",
                    y: graficoValores.comAporte[6],
                  },
                  {
                    x: "7",
                    y: graficoValores.comAporte[7],
                  },
                  {
                    x: "8",
                    y: graficoValores.comAporte[8],
                  },
                  {
                    x: "9",
                    y: graficoValores.comAporte[9],
                  },
                  {
                    x: "10",
                    y: graficoValores.comAporte[10],
                  },
                ]}
                alignment="start"
                // labels={({ datum }) => ` ${datum.x}`}
                style={{
                  data: {
                    fill: "#EA7238",
                  },
                }}
              />
            </VictoryChart>
            <h1>Tempo (meses)</h1>
            <p>Com Aporte</p>
          </S.Graph>
        ))}
      </S.Content>
      <S.Content>
        {getCard.map(({ graficoValores }, index) => (
          <S.Graph>
            <VictoryChart>
              <VictoryBar
                key={index}
                data={[
                  {
                    x: "0",
                    y: graficoValores.semAporte[0],
                  },
                  {
                    x: "1",
                    y: graficoValores.semAporte[1],
                  },
                  {
                    x: "2",
                    y: graficoValores.semAporte[2],
                  },
                  {
                    x: "3",
                    y: graficoValores.semAporte[3],
                  },
                  {
                    x: "4",
                    y: graficoValores.semAporte[4],
                  },
                  {
                    x: "5",
                    y: graficoValores.semAporte[5],
                  },
                  {
                    x: "6",
                    y: graficoValores.semAporte[6],
                  },
                  {
                    x: "7",
                    y: graficoValores.semAporte[7],
                  },
                  {
                    x: "8",
                    y: graficoValores.semAporte[8],
                  },
                  {
                    x: "9",
                    y: graficoValores.semAporte[9],
                  },
                  {
                    x: "10",
                    y: graficoValores.semAporte[10],
                  },
                ]}
                alignment="start"
              />
            </VictoryChart>
            <h1>Tempo (meses)</h1>
            <h2>Sem Aporte</h2>
          </S.Graph>
        ))}
      </S.Content>
    </S.Container>
  );
};

export default GraphsFilter;
