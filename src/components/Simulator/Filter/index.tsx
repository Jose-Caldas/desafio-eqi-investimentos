import { formatNumber } from "../../../utils/formatNumber";
import { Loader } from "../../../utils/Loader";

import { Card } from "../Card";

interface FilterProps {
  cards: object;
  typeIndexing: string;
  typeIncome: string;
  incomeButtonLeft: boolean;
  indexingButtonLeft: boolean;
  indexingButtonCenter: boolean;
  indexingButtonRight: boolean;
  incomeButtonRight: boolean;
  show: boolean;
  isLoading?: boolean;
}

const Filter = ({
  cards,
  typeIndexing,
  typeIncome,
  show,
  isLoading,
}: FilterProps) => {
  let cardList = cards ? Object.values(cards) : [];

  const getCard = cardList.filter(
    ({ tipoIndexacao, tipoRendimento }) =>
      tipoIndexacao === typeIndexing && tipoRendimento === typeIncome
  );

  return (
    <>
      {show &&
        getCard.map(({ valorFinalBruto }, idx) =>
          isLoading ? (
            <Loader />
          ) : (
            <Card
              key={idx}
              title="Valor Final Bruto"
              value={formatNumber(valorFinalBruto)}
            />
          )
        )}

      {show &&
        getCard.map(({ aliquotaIR }, idx) =>
          isLoading ? (
            <Loader />
          ) : (
            <Card key={idx} title="Alíquota do IR" value={aliquotaIR} />
          )
        )}

      {show &&
        getCard.map(({ valorPagoIR }, idx) =>
          isLoading ? (
            <Loader />
          ) : (
            <Card
              key={idx}
              title="Valor Pago em IR"
              value={formatNumber(valorPagoIR)}
            />
          )
        )}

      {show &&
        getCard.map(({ valorFinalLiquido }, idx) =>
          isLoading ? (
            <Loader />
          ) : (
            <Card
              key={idx}
              title="Valor Final Líquido"
              value={formatNumber(valorFinalLiquido)}
            />
          )
        )}

      {show &&
        getCard.map(({ valorTotalInvestido }, idx) =>
          isLoading ? (
            <Loader />
          ) : (
            <Card
              key={idx}
              title="Valor Total investido"
              value={formatNumber(valorTotalInvestido)}
            />
          )
        )}
      {show &&
        getCard.map(({ ganhoLiquido }, idx) =>
          isLoading ? (
            <Loader />
          ) : (
            <Card
              key={idx}
              title="Ganho Líquido"
              value={formatNumber(ganhoLiquido)}
            />
          )
        )}
    </>
  );
};

export default Filter;
