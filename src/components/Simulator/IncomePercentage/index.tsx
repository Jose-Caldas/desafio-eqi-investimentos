import React from "react";
import { useAppContext } from "../../context/AppContext/hook";
import * as S from "./styles";

const IncomePercentage = () => {
  const { state } = useAppContext();

  const percentage =
    state.indexingButtonLeft ||
    state.indexingButtonCenter ||
    state.indexingButtonRight
      ? "20%"
      : "%";

  return (
    <S.Wrapper>
      <S.Title>Rentabilidade</S.Title>
      <S.Description>{percentage}</S.Description>
    </S.Wrapper>
  );
};

export default IncomePercentage;
