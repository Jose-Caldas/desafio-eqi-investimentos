import React, { useState } from "react";

import { Header, Wrapper, Title } from "./styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Button from "../../Button";
import Input from "../../Input";

const Indexing = () => {
  const [loading, setLoading] = useState(false);

  const handleOnClick = () => {
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
      <Input label="Aporte Anual" id="aporte-inicial" name="aporte-inicial" />
      <Input label="Rentabilidade" id="aporte-inicial" name="aporte-inicial" />
      <Input label="CDI (ao ano)" id="aporte-inicial" name="aporte-inicial" />
      <Button
        title="Simular"
        onClick={handleOnClick}
        isLoading={loading}
        types="secondary"
        disabled={loading}
      />
    </Wrapper>
  );
};

export default Indexing;
