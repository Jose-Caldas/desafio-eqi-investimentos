import React, { useState } from "react";

import {
  Header,
  Wrapper,
  Title,
  IncomingType,
  LeftButtom,
  RightButtom,
  Icon,
} from "./styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CheckIcon from "@material-ui/icons/Check";

const Income = () => {
  const [checkedLeft, setCheckedLeft] = useState(false);
  const [checkedRight, setCheckedRight] = useState(false);

  const handleLeftButton = () => {
    setCheckedLeft(!checkedLeft);
    if (checkedRight) setCheckedRight(false);
  };
  const handleRightButton = () => {
    setCheckedRight(!checkedRight);
    if (checkedLeft) setCheckedLeft(false);
  };

  const styledButtonLeft = {
    background: checkedLeft ? "#f27e22" : "#FFFFFF",
    color: checkedLeft ? "#FFFF" : "#000",
  };
  const styledButtonRight = {
    background: checkedRight ? "#f27e22" : "#FFFFFF",
    color: checkedRight ? "#FFFF" : "#000",
  };

  return (
    <Wrapper>
      <Header>
        <Title>Rendimento</Title>
        <InfoOutlinedIcon fontSize="small" />
      </Header>
      <IncomingType>
        <LeftButtom onClick={handleLeftButton} style={{ ...styledButtonLeft }}>
          <Icon>{checkedLeft && <CheckIcon fontSize="small" />}</Icon>
          Bruto
        </LeftButtom>

        <RightButtom
          onClick={handleRightButton}
          style={{ ...styledButtonRight }}
        >
          {checkedRight && <CheckIcon fontSize="small" />}
          Líquido
        </RightButtom>
      </IncomingType>
    </Wrapper>
  );
};

export default Income;
