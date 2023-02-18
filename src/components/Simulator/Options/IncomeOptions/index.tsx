import React from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CheckIcon from "@material-ui/icons/Check";

import * as S from "./styles";
import { useAppContext } from "../../../context/AppContext/hook";

const IncomeOptions = () => {
  const { state, setIncomeButtonLeft, setIncomeButtonRight } = useAppContext();

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

  return (
    <S.Wrapper>
      <S.Header>
        <S.IncomeTitle>Rendimento</S.IncomeTitle>
        <InfoOutlinedIcon fontSize="small" />
      </S.Header>
      <S.IncomeButtons>
        <S.IncomeLeft
          onClick={handleLeftIncome}
          style={{ ...styledIncomeLeft }}
        >
          {state.incomeButtonLeft && <CheckIcon fontSize="small" />}
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
    </S.Wrapper>
  );
};

export default IncomeOptions;
