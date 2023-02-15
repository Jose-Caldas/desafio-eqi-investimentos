import { formatNumber } from "../../../utils/formatNumber";
import { Loader } from "../../../utils/Loader";

import { Card } from "../Card";

interface CardsFilterProps {
  cards: object;
  typeIndexing: string;
  typeIncome: string;
  isLoading?: boolean;
}

const CardsFilter = ({
  cards,
  typeIndexing,
  typeIncome,
  isLoading,
}: CardsFilterProps) => {
  let cardList = cards ? Object.values(cards) : [];

  const getCard = cardList.filter(
    ({ tipoIndexacao, tipoRendimento }) =>
      tipoIndexacao === typeIndexing && tipoRendimento === typeIncome
  );

  return (
    <>
      {getCard.map(({ valorFinalBruto }, idx) =>
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

      {getCard.map(({ aliquotaIR }, idx) =>
        isLoading ? (
          <Loader />
        ) : (
          <Card key={idx} title="Alíquota do IR" value={aliquotaIR} />
        )
      )}

      {getCard.map(({ valorPagoIR }, idx) =>
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

      {getCard.map(({ valorFinalLiquido }, idx) =>
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

      {getCard.map(({ valorTotalInvestido }, idx) =>
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

      {getCard.map(({ ganhoLiquido }, idx) =>
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

export default CardsFilter;
