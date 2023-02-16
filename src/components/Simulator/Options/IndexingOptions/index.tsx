import React from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CheckIcon from "@material-ui/icons/Check";

import * as S from "./styles";
import { useAppContext } from "../../../context/hook";

const IndexingOptions = () => {
  const {
    state,
    setIndexingButtonRight,
    setIndexingButtonLeft,
    setIndexingButtonCenter,
  } = useAppContext();

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

  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
};

export default IndexingOptions;
