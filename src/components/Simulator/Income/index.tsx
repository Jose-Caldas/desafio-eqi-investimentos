import React, { useEffect, useState } from "react";

import {
  Header,
  Wrapper,
  Title,
  IncomingType,
  LeftButtom,
  RightButtom,
  Icon,
  Label,
  Input,
  Form,
  Field,
} from "./styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CheckIcon from "@material-ui/icons/Check";
import Button from "../../Button";
import { GET_INDICATORS } from "../../../api";
import CardIncome from "../../CardIncome";

const Income = () => {
  const [loading, setLoading] = useState(false);
  const [checkedLeft, setCheckedLeft] = useState(false);
  const [checkedRight, setCheckedRight] = useState(false);
  const [indicators, setIndicator] = useState([]);

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

  async function getIndicators() {
    const { url, options } = GET_INDICATORS();

    const response = await fetch(url, options);
    const data = await response.json();

    setIndicator(data);
  }

  useEffect(() => {
    setCheckedLeft(true);
    getIndicators();
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
      <Form>
        <Label>Aporte Inicial</Label>
        <Input />
        <Field>
          <h1>Prazo (em meses)</h1>
          <p>Valor vindo da API</p>
        </Field>
        <Field>
          {indicators.map(({ nome, valor }) => (
            <CardIncome key={nome} label={nome} value={valor} />
          ))}
        </Field>
      </Form>
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
