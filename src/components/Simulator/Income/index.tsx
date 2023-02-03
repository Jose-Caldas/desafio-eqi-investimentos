import React, { useState } from "react";

import { Header, Wrapper, Title } from "./styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Button from "../../Button";
import Input from "../../Input";
import { incomeData } from "../../Input/input.data";

const Income = () => {
  const [loading, setLoading] = useState(false);

  const handleOnClick = () => {
    alert("Deseja realmente apagar os dados?");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Wrapper>
      <Header>
        <Title>Rendimento</Title>
        <InfoOutlinedIcon fontSize="small" />
      </Header>
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
