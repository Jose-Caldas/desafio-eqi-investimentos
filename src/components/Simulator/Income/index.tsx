import { useState, useEffect } from "react";

import {
  Header,
  Wrapper,
  IncomeTitle,
  IncomeButtons,
  IncomeLeft,
  IncomeRight,
  Icon,
} from "./styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CheckIcon from "@material-ui/icons/Check";

const Income = () => {
  const [incomeButtonLeft, setIncomeButtonLeft] = useState(false);
  const [incomeButtonRight, setIncomeButtonRight] = useState(false);

  const handleLeftIncome = () => {
    setIncomeButtonLeft(!incomeButtonLeft);
    if (incomeButtonRight) setIncomeButtonRight(false);
  };
  const handleRightIncome = () => {
    setIncomeButtonRight(!incomeButtonRight);
    if (incomeButtonLeft) setIncomeButtonLeft(false);
  };

  const styledButtonLeft = {
    background: incomeButtonLeft ? "#f27e22" : "#FFFFFF",
    color: incomeButtonLeft ? "#FFFF" : "#333",
  };
  const styledButtonRight = {
    background: incomeButtonRight ? "#f27e22" : "#FFFFFF",
    color: incomeButtonRight ? "#FFFF" : "#333",
  };

  useEffect(() => {
    setIncomeButtonLeft(true);
  }, []);

  return (
    <Wrapper>
      <Header>
        <IncomeTitle>Rendimento</IncomeTitle>
        <InfoOutlinedIcon fontSize="small" />
      </Header>
      <IncomeButtons>
        <IncomeLeft onClick={handleLeftIncome} style={{ ...styledButtonLeft }}>
          <Icon>{incomeButtonLeft && <CheckIcon fontSize="small" />}</Icon>
          Bruto
        </IncomeLeft>

        <IncomeRight
          onClick={handleRightIncome}
          style={{ ...styledButtonRight }}
        >
          {incomeButtonRight && <CheckIcon fontSize="small" />}
          Líquido
        </IncomeRight>
      </IncomeButtons>
    </Wrapper>
  );
};

export default Income;
