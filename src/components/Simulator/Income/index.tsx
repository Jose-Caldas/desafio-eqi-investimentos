import React, { useState } from "react";

import { Header, Wrapper, Title } from "./styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Button from "../../Button";
import Input from "../../Input";

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
      <Input label="Aporte Inicial" id="aporte-inicial" name="aporte-inicial" />
      <Input
        label="Prazo (em meses)"
        id="aporte-inicial"
        name="aporte-inicial"
      />
      <Input label="IPCA (ao ano)" id="aporte-inicial" name="aporte-inicial" />
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
