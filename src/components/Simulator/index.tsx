import React, { useState } from "react";
import { Card } from "./Card";
import { Wrapper, Title, Section, Options, Result, SubTitle } from "./styles";

const Simulator = () => {
  const [loading, setLoading] = useState(false);

  const handleOnClick = () => {
    setLoading(true);
    console.log("clicou");

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const handlePress = () => {
    setLoading(true);
    console.log("clicou");

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Wrapper>
      <Title>Simulador de investimentos</Title>
      <SubTitle>Simulador</SubTitle>
      <Section>
        <Options>
          <Card
            title="Rendimento"
            buttonTitle="Limpar campos"
            onClick={handleOnClick}
            isLoading={loading}
            disabled={loading}
            types="primary"
          />
          <Card
            title="Tipos de indexação"
            buttonTitle="Simular"
            onClick={handlePress}
            isLoading={loading}
            types="secondary"
          />
        </Options>
        <Result>Todo Result...</Result>
      </Section>
    </Wrapper>
  );
};

export default Simulator;
