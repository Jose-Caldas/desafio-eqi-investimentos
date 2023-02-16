import React, { useState, useEffect } from "react";
import { GET_SIMULATORS } from "../../../api";
import useFetch from "../../../Hooks/useFetch";
import { ISimulators } from "../../../interfaces/ISimulators";
import { VictoryChart, VictoryBar } from "victory";

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
    <div style={{ display: "flex", gap: 20 }}>
      <div>
        {getCard.map(({ graficoValores }) => (
          <>
            <VictoryChart>
              <VictoryBar
                key={graficoValores.comAporte[0]}
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
                style={{
                  data: {
                    fill: "#EA7238",
                  },
                }}
              />
            </VictoryChart>
            <p style={{ textAlign: "center" }}>Com Aporte</p>
          </>
        ))}
      </div>
      <div>
        {getCard.map(({ graficoValores }) => (
          <>
            <VictoryChart>
              <VictoryBar
                key={graficoValores.semAporte[0]}
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
            <p style={{ textAlign: "center" }}>Sem Aporte</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default GraphsFilter;
