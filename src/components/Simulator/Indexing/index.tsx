import React, { useEffect, useState } from "react";

import {
  Header,
  Wrapper,
  Title,
  IndexingType,
  LeftButtom,
  CenterButton,
  RightButtom,
} from "./styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import CheckIcon from "@material-ui/icons/Check";

const Indexing = () => {
  const [checkedLeft, setCheckedLeft] = useState(false);
  const [checkedRight, setCheckedRight] = useState(false);
  const [checkedCenter, setCheckedCenter] = useState(false);

  const handleLeftButton = () => {
    setCheckedLeft(!checkedLeft);
    if (checkedRight) setCheckedRight(false);
    if (checkedCenter) setCheckedCenter(false);
  };

  const handleCenterButton = () => {
    setCheckedCenter(!checkedCenter);
    if (checkedRight) setCheckedRight(false);
    if (checkedLeft) setCheckedLeft(false);
  };

  const handleRightButton = () => {
    setCheckedRight(!checkedRight);
    if (checkedLeft) setCheckedLeft(false);
    if (checkedCenter) setCheckedCenter(false);
  };

  const styledButtonLeft = {
    background: checkedLeft ? "#f27e22" : "#FFFFFF",
    color: checkedLeft ? "#FFFF" : "#333",
  };
  const styledButtonRight = {
    background: checkedRight ? "#f27e22" : "#FFFFFF",
    color: checkedRight ? "#FFFF" : "#333",
  };
  const styledButtonCenter = {
    background: checkedCenter ? "#f27e22" : "#FFFFFF",
    color: checkedCenter ? "#FFFF" : "#333",
  };

  useEffect(() => {
    setCheckedCenter(true);
  }, []);

  return (
    <Wrapper>
      <Header>
        <Title>Tipos de indexação</Title>
        <InfoOutlinedIcon fontSize="small" />
      </Header>
      <IndexingType>
        <LeftButtom onClick={handleLeftButton} style={{ ...styledButtonLeft }}>
          {checkedLeft && <CheckIcon fontSize="small" />}
          PRÉ
        </LeftButtom>
        <CenterButton
          onClick={handleCenterButton}
          style={{ ...styledButtonCenter }}
        >
          {checkedCenter && <CheckIcon fontSize="small" />}
          POS
        </CenterButton>
        <RightButtom
          onClick={handleRightButton}
          style={{ ...styledButtonRight }}
        >
          {checkedRight && <CheckIcon fontSize="small" />}
          Fixado
        </RightButtom>
      </IndexingType>
    </Wrapper>
  );
};

export default Indexing;
