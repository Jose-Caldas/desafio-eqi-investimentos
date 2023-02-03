import React, { useState } from "react";

import { Header, Wrapper, Title } from "./styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Button from "../../Button";
import Input from "../../Input";
import { indexingData } from "../../Input/input.data";

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
      {indexingData.map((indexing) => (
        <Input key={indexing.id} label={indexing.label} id={indexing.id} />
      ))}
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
