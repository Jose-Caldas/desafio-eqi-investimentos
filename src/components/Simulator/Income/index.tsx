import React, { useEffect, useState } from "react";

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
import Button from "../../Button";
import Input from "../../Input";
import { incomeData } from "../../Input/input.data";

const Income = () => {
  const [loading, setLoading] = useState(false);
  const [checkedLeft, setCheckedLeft] = useState(false);
  const [checkedRight, setCheckedRight] = useState(false);

  const handleOnClick = () => {
    alert("Os campos do formulário serão limpos!");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

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

  useEffect(() => {
    setCheckedLeft(true);
  }, []);

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
      {incomeData.map((income) => (
        <Input id={income.id} label={income.label} key={income.id} />
      ))}
      <Button
        title="Limpar campos"
        onClick={handleOnClick}
        isLoading={loading}
        types="primary"
        disabled={loading}
      />
    </Wrapper>
  );
};

export default Income;
