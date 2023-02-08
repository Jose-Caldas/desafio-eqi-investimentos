import { formatNumber } from "../../../utils/formatNumber";
import { Card } from "../Card";

interface FilterProps {
  cards: object;
  typeIndex: string;
  typeRend: string;
  incomeButtonLeft: boolean;
  indexingButtonLeft: boolean;
  indexingButtonCenter: boolean;
  indexingButtonRight: boolean;
  incomeButtonRight: boolean;
  show: boolean;
}

const Filter = ({ cards, typeIndex, typeRend, show }: FilterProps) => {
  let cardList = cards ? Object.values(cards) : [];

  const getCard = cardList.filter(
    ({ tipoIndexacao, tipoRendimento }) =>
      tipoIndexacao === typeIndex && tipoRendimento === typeRend
  );

  return (
    <>
      {show &&
        getCard.map(({ valorFinalBruto }, idx) => (
          <Card
            key={idx}
            title="Valor Final Bruto"
            value={formatNumber(valorFinalBruto)}
          />
        ))}

      {show &&
        getCard.map(({ aliquotaIR }, idx) => (
          <Card key={idx} title="Alíquota do IR" value={aliquotaIR} />
        ))}

      {show &&
        getCard.map(({ valorPagoIR }, idx) => (
          <Card
            key={idx}
            title="Valor Pago em IR"
            value={formatNumber(valorPagoIR)}
          />
        ))}

      {show &&
        getCard.map(({ valorFinalLiquido }, idx) => (
          <Card
            key={idx}
            title="Valor Final Líquido"
            value={formatNumber(valorFinalLiquido)}
          />
        ))}

      {show &&
        getCard.map(({ valorTotalInvestido }, idx) => (
          <Card
            key={idx}
            title="Valor Total investido"
            value={formatNumber(valorTotalInvestido)}
          />
        ))}
      {show &&
        getCard.map(({ ganhoLiquido }, idx) => (
          <Card
            key={idx}
            title="Ganho Líquido"
            value={formatNumber(ganhoLiquido)}
          />
        ))}
    </>
  );
};

export default Filter;
